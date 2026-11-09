<?php
/**
 * Ottoman Palace Restaurant - Dish management
 */

declare(strict_types=1);

require_once __DIR__ . '/auth.php';
require_once dirname(__DIR__) . '/config.php';

require_admin();

function dishes_h(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES, 'UTF-8');
}

$languages = [
    'zh' => 'الصينية',
    'en' => 'الإنجليزية',
    'ar' => 'العربية',
    'tr' => 'التركية',
];

$message = '';
$messageType = 'error';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $csrf = (string) ($_POST['csrf_token'] ?? '');

    if (!verify_admin_csrf_token($csrf)) {
        $message = 'انتهت صلاحية الطلب. أعد تحميل الصفحة وحاول مرة أخرى.';
    } else {
        $action = (string) ($_POST['action'] ?? '');

        try {
            if ($action === 'add' || $action === 'update') {
                $dishId = (int) ($_POST['dish_id'] ?? 0);
                $categoryId = (int) ($_POST['category_id'] ?? 0);
                $priceInput = trim((string) ($_POST['price'] ?? ''));
                $imageFilename = trim((string) ($_POST['image_filename'] ?? ''));
                $sortOrder = filter_var(
                    $_POST['sort_order'] ?? 0,
                    FILTER_VALIDATE_INT
                );

                $isSignature = isset($_POST['is_signature']) ? 1 : 0;
                $isAvailable = isset($_POST['is_available']) ? 1 : 0;
                $names = $_POST['names'] ?? [];
                $descriptions = $_POST['descriptions'] ?? [];

                if (
                    $categoryId <= 0
                    || !is_numeric($priceInput)
                    || (float) $priceInput < 0
                    || !is_finite((float) $priceInput)
                    || (float) $priceInput > 99999999.99
                    || $sortOrder === false
                    || $sortOrder < 0
                    || !is_array($names)
                    || !is_array($descriptions)
                ) {
                    throw new InvalidArgumentException(
                        'تحقق من القسم والسعر وترتيب الطبق.'
                    );
                }

                if (
                    $imageFilename !== ''
                    && !preg_match('/^[a-zA-Z0-9_-]{1,255}$/', $imageFilename)
                ) {
                    throw new InvalidArgumentException(
                        'اسم الصورة غير صحيح. اكتب اسم الملف دون الامتداد.'
                    );
                }

                foreach ($languages as $code => $label) {
                    if (
                        !isset($names[$code])
                        || !is_string($names[$code])
                        || trim($names[$code]) === ''
                    ) {
                        throw new InvalidArgumentException(
                            'يجب كتابة اسم الطبق بجميع اللغات.'
                        );
                    }

                    if (
                        !isset($descriptions[$code])
                        || !is_string($descriptions[$code])
                    ) {
                        throw new InvalidArgumentException(
                            'بيانات وصف الطبق غير صحيحة.'
                        );
                    }

                    $names[$code] = trim($names[$code]);
                    $descriptions[$code] = trim($descriptions[$code]);

                    if (mb_strlen($names[$code], 'UTF-8') > 200) {
                        throw new InvalidArgumentException(
                            'اسم الطبق طويل جدًا.'
                        );
                    }
                }

                $categoryCheck = $pdo->prepare(
                    'SELECT id FROM categories WHERE id = :id'
                );
                $categoryCheck->execute(['id' => $categoryId]);

                if (!$categoryCheck->fetch()) {
                    throw new InvalidArgumentException('القسم المحدد غير موجود.');
                }

                $pdo->beginTransaction();

                if ($action === 'add') {
                    $statement = $pdo->prepare(
                        'INSERT INTO dishes
                        (
                            category_id,
                            price,
                            currency_code,
                            image_filename,
                            is_signature,
                            is_available,
                            sort_order
                        )
                        VALUES
                        (
                            :category_id,
                            :price,
                            :currency_code,
                            :image_filename,
                            :is_signature,
                            :is_available,
                            :sort_order
                        )'
                    );

                    $statement->execute([
                        'category_id' => $categoryId,
                        'price' => number_format((float) $priceInput, 2, '.', ''),
                        'currency_code' => 'CNY',
                        'image_filename' => $imageFilename !== ''
                            ? $imageFilename
                            : null,
                        'is_signature' => $isSignature,
                        'is_available' => $isAvailable,
                        'sort_order' => $sortOrder,
                    ]);

                    $dishId = (int) $pdo->lastInsertId();

                } else {
                    if ($dishId <= 0) {
                        throw new InvalidArgumentException('رقم الطبق غير صحيح.');
                    }

                    $statement = $pdo->prepare(
                        'UPDATE dishes
                         SET category_id = :category_id,
                             price = :price,
                             image_filename = :image_filename,
                             is_signature = :is_signature,
                             is_available = :is_available,
                             sort_order = :sort_order
                         WHERE id = :id'
                    );

                    $statement->execute([
                        'category_id' => $categoryId,
                        'price' => number_format((float) $priceInput, 2, '.', ''),
                        'image_filename' => $imageFilename !== ''
                            ? $imageFilename
                            : null,
                        'is_signature' => $isSignature,
                        'is_available' => $isAvailable,
                        'sort_order' => $sortOrder,
                        'id' => $dishId,
                    ]);

                    $dishCheck = $pdo->prepare(
                        'SELECT id FROM dishes WHERE id = :id'
                    );
                    $dishCheck->execute(['id' => $dishId]);

                    if (!$dishCheck->fetch()) {
                        throw new InvalidArgumentException('الطبق غير موجود.');
                    }
                }

                $translationStatement = $pdo->prepare(
                    'INSERT INTO dish_translations
                    (dish_id, language_code, name, description)
                    VALUES
                    (:dish_id, :language_code, :name, :description)
                    ON DUPLICATE KEY UPDATE
                        name = VALUES(name),
                        description = VALUES(description)'
                );

                foreach ($languages as $code => $label) {
                    $translationStatement->execute([
                        'dish_id' => $dishId,
                        'language_code' => $code,
                        'name' => $names[$code],
                        'description' => $descriptions[$code] !== ''
                            ? $descriptions[$code]
                            : null,
                    ]);
                }

                $pdo->commit();

                header('Location: dishes.php?status=saved');
                exit;
            }

            if ($action === 'toggle') {
                $dishId = (int) ($_POST['dish_id'] ?? 0);

                if ($dishId <= 0) {
                    throw new InvalidArgumentException('رقم الطبق غير صحيح.');
                }

                $statement = $pdo->prepare(
                    'UPDATE dishes
                     SET is_available = IF(is_available = 1, 0, 1)
                     WHERE id = :id'
                );

                $statement->execute(['id' => $dishId]);

                if ($statement->rowCount() === 0) {
                    throw new InvalidArgumentException('الطبق غير موجود.');
                }

                header('Location: dishes.php?status=changed');
                exit;
            }

            throw new InvalidArgumentException('العملية المطلوبة غير معروفة.');

        } catch (InvalidArgumentException $exception) {
            if ($pdo->inTransaction()) {
                $pdo->rollBack();
            }

            $message = $exception->getMessage();

        } catch (PDOException $exception) {
            if ($pdo->inTransaction()) {
                $pdo->rollBack();
            }

            error_log('Dish management error: ' . $exception->getMessage());
            $message = 'تعذر حفظ الطبق. تحقق من البيانات وحاول مرة أخرى.';
        }
    }
}

if (isset($_GET['status'])) {
    if ($_GET['status'] === 'saved') {
        $message = 'تم حفظ بيانات الطبق بنجاح.';
        $messageType = 'success';
    } elseif ($_GET['status'] === 'changed') {
        $message = 'تم تغيير حالة الطبق بنجاح.';
        $messageType = 'success';
    }
}

/* Load categories */
try {
    $categoryStatement = $pdo->query(
        "SELECT
            c.id,
            c.slug,
            c.is_active,
            COALESCE(ar.name, en.name, c.slug) AS category_name
         FROM categories c
         LEFT JOIN category_translations ar
            ON ar.category_id = c.id AND ar.language_code = 'ar'
         LEFT JOIN category_translations en
            ON en.category_id = c.id AND en.language_code = 'en'
         ORDER BY c.sort_order ASC, c.id ASC"
    );

    $categories = $categoryStatement->fetchAll();

    $categoryNames = [];

    foreach ($categories as $category) {
        $categoryNames[(int) $category['id']] =
            (string) $category['category_name'];
    }

    /* Load dishes and their translations */
    $dishStatement = $pdo->query(
        'SELECT
            d.id,
            d.category_id,
            d.price,
            d.image_filename,
            d.is_signature,
            d.is_available,
            d.sort_order,
            t.language_code,
            t.name,
            t.description
         FROM dishes d
         LEFT JOIN dish_translations t
            ON t.dish_id = d.id
         ORDER BY d.sort_order ASC, d.id DESC'
    );

    $dishes = [];

    foreach ($dishStatement->fetchAll() as $row) {
        $id = (int) $row['id'];

        if (!isset($dishes[$id])) {
            $dishes[$id] = [
                'id' => $id,
                'category_id' => (int) $row['category_id'],
                'price' => (string) $row['price'],
                'image_filename' => (string) ($row['image_filename'] ?? ''),
                'is_signature' => (int) $row['is_signature'],
                'is_available' => (int) $row['is_available'],
                'sort_order' => (int) $row['sort_order'],
                'names' => [],
                'descriptions' => [],
            ];
        }

        if ($row['language_code'] !== null) {
            $code = (string) $row['language_code'];

            $dishes[$id]['names'][$code] = (string) $row['name'];
            $dishes[$id]['descriptions'][$code] =
                (string) ($row['description'] ?? '');
        }
    }

} catch (PDOException $exception) {
    error_log('Dish listing error: ' . $exception->getMessage());
    http_response_code(500);
    exit('تعذر تحميل بيانات الأطباق.');
}

$csrfToken = create_admin_csrf_token();
$adminUsername = (string) ($_SESSION['admin_username'] ?? 'Admin');
?>
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>إدارة الأطباق - Ottoman Palace</title>

    <style>
        * { box-sizing: border-box; }

        body {
            margin: 0;
            padding: 22px;
            background: #f3f4f2;
            color: #292d30;
            font-family: Arial, sans-serif;
        }

        .container {
            max-width: 1100px;
            margin: auto;
        }

        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 15px;
            margin-bottom: 24px;
        }

        h1, h2, h3 { color: #263b32; }

        .panel {
            background: #fff;
            border: 1px solid #e5e5e5;
            border-radius: 12px;
            padding: 22px;
            margin-bottom: 22px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
        }

        label {
            display: block;
            margin: 12px 0 7px;
            font-weight: bold;
        }

        input, select, textarea {
            width: 100%;
            padding: 11px;
            border: 1px solid #ccc;
            border-radius: 7px;
            font-size: 15px;
            font-family: inherit;
        }

        textarea {
            min-height: 75px;
            resize: vertical;
        }

        button, .link {
            display: inline-block;
            padding: 10px 15px;
            border: 0;
            border-radius: 7px;
            background: #263b32;
            color: white;
            text-decoration: none;
            cursor: pointer;
            font-size: 14px;
        }

        .secondary { background: #777; }
        .danger { background: #9b3434; }

        .actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            margin-top: 16px;
        }

        .message {
            padding: 13px;
            border-radius: 7px;
            margin-bottom: 18px;
            background: #f8eaea;
            color: #8d2929;
        }

        .message.success {
            background: #e8f3eb;
            color: #246b42;
        }

        .dish {
            border-top: 1px solid #eee;
            padding: 22px 0;
        }

        .dish:first-of-type { border-top: 0; }

        .dish-meta {
            color: #666;
            font-size: 13px;
            line-height: 1.9;
        }

        .active { color: #246b42; }
        .inactive { color: #9b3434; }

        .language-title {
            margin-top: 22px;
            padding-bottom: 8px;
            border-bottom: 1px solid #eee;
            color: #b69a60;
        }

        .check-row {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-top: 15px;
        }

        .check-row input {
            width: auto;
        }

        .check-row label {
            margin: 0;
        }

        .dish-count {
            color: #777;
            font-size: 14px;
        }

        @media (max-width: 650px) {
            body { padding: 13px; }
            .panel { padding: 15px; }
            .grid { grid-template-columns: 1fr; }
        }
    </style>
</head>

<body>
<div class="container">

    <header>
        <div>
            <h1>إدارة الأطباق</h1>
            <p>مرحبًا <?= dishes_h($adminUsername) ?></p>
            <span class="dish-count">
                إجمالي الأطباق: <?= count($dishes) ?>
            </span>
        </div>

        <a class="link secondary" href="dashboard.php">
            العودة للوحة التحكم
        </a>
    </header>

    <?php if ($message !== ''): ?>
        <div class="message <?= $messageType === 'success' ? 'success' : '' ?>">
            <?= dishes_h($message) ?>
        </div>
    <?php endif; ?>

    <?php if (empty($categories)): ?>
        <div class="panel">
            <p>يجب إضافة قسم واحد على الأقل قبل إضافة الأطباق.</p>
            <a class="link" href="categories.php">إدارة الأقسام</a>
        </div>
    <?php else: ?>

    <section class="panel">
        <h2>إضافة طبق جديد</h2>

        <form method="post">
            <input type="hidden" name="csrf_token"
                   value="<?= dishes_h($csrfToken) ?>">
            <input type="hidden" name="action" value="add">

            <div class="grid">
                <div>
                    <label for="new_category">القسم</label>
                    <select id="new_category" name="category_id" required>
                        <?php foreach ($categories as $category): ?>
                            <?php if ((int) $category['is_active'] === 1): ?>
                                <option value="<?= (int) $category['id'] ?>">
                                    <?= dishes_h($category['category_name']) ?>
                                </option>
                            <?php endif; ?>
                        <?php endforeach; ?>
                    </select>
                </div>

                <div>
                    <label for="new_price">السعر (CNY)</label>
                    <input id="new_price" name="price"
                           type="number" min="0" max="99999999.99"
                           step="0.01" required>
                </div>

                <div>
                    <label for="new_image">اسم ملف الصورة دون الامتداد</label>
                    <input id="new_image" name="image_filename"
                           maxlength="255"
                           placeholder="مثال: m-2-24">
                </div>

                <div>
                    <label for="new_order">ترتيب الظهور</label>
                    <input id="new_order" name="sort_order"
                           type="number" min="0" value="0" required>
                </div>
            </div>

            <div class="check-row">
                <input id="new_signature" type="checkbox" name="is_signature">
                <label for="new_signature">طبق مميز Signature</label>
            </div>

            <div class="check-row">
                <input id="new_available" type="checkbox"
                       name="is_available" checked>
                <label for="new_available">الطبق متاح للطلب</label>
            </div>

            <?php foreach ($languages as $code => $label): ?>
                <h3 class="language-title">
                    بيانات اللغة <?= dishes_h($label) ?>
                </h3>

                <div class="grid">
                    <div>
                        <label>اسم الطبق</label>
                        <input name="names[<?= $code ?>]"
                               maxlength="200" required>
                    </div>

                    <div>
                        <label>وصف الطبق</label>
                        <textarea name="descriptions[<?= $code ?>]"></textarea>
                    </div>
                </div>
            <?php endforeach; ?>

            <div class="actions">
                <button type="submit">إضافة الطبق</button>
            </div>
        </form>
    </section>

    <?php endif; ?>

    <section class="panel">
        <h2>الأطباق الحالية</h2>

        <?php if (empty($dishes)): ?>
            <p>لا توجد أطباق حتى الآن.</p>
        <?php endif; ?>

        <?php foreach ($dishes as $dish): ?>
            <article class="dish">

                <div class="dish-meta">
                    <strong>رقم الطبق:</strong>
                    <?= (int) $dish['id'] ?>
                    |
                    <strong>القسم:</strong>
                    <?= dishes_h(
                        $categoryNames[$dish['category_id']] ?? 'غير معروف'
                    ) ?>
                    |
                    <strong>الحالة:</strong>
                    <span class="<?= $dish['is_available'] ? 'active' : 'inactive' ?>">
                        <?= $dish['is_available'] ? 'متاح' : 'مخفي' ?>
                    </span>
                    |
                    <strong>السعر:</strong>
                    <?= dishes_h($dish['price']) ?> CNY
                </div>

                <form method="post">
                    <input type="hidden" name="csrf_token"
                           value="<?= dishes_h($csrfToken) ?>">
                    <input type="hidden" name="action" value="update">
                    <input type="hidden" name="dish_id"
                           value="<?= (int) $dish['id'] ?>">

                    <div class="grid">
                        <div>
                            <label>القسم</label>
                            <select name="category_id" required>
                                <?php foreach ($categories as $category): ?>
                                    <option
                                        value="<?= (int) $category['id'] ?>"
                                        <?= $dish['category_id'] === (int) $category['id']
                                            ? 'selected' : '' ?>>
                                        <?= dishes_h($category['category_name']) ?>
                                    </option>
                                <?php endforeach; ?>
                            </select>
                        </div>

                        <div>
                            <label>السعر (CNY)</label>
                            <input name="price" type="number"
                                   min="0" max="99999999.99" step="0.01"
                                   value="<?= dishes_h($dish['price']) ?>"
                                   required>
                        </div>

                        <div>
                            <label>اسم ملف الصورة دون الامتداد</label>
                            <input name="image_filename"
                                   maxlength="255"
                                   value="<?= dishes_h($dish['image_filename']) ?>"
                                   placeholder="مثال: m-2-24">
                        </div>

                        <div>
                            <label>ترتيب الظهور</label>
                            <input name="sort_order" type="number" min="0"
                                   value="<?= (int) $dish['sort_order'] ?>"
                                   required>
                        </div>
                    </div>

                    <div class="check-row">
                        <input
                            id="signature_<?= (int) $dish['id'] ?>"
                            type="checkbox"
                            name="is_signature"
                            <?= $dish['is_signature'] ? 'checked' : '' ?>>
                        <label for="signature_<?= (int) $dish['id'] ?>">
                            طبق مميز Signature
                        </label>
                    </div>

                    <div class="check-row">
                        <input
                            id="available_<?= (int) $dish['id'] ?>"
                            type="checkbox"
                            name="is_available"
                            <?= $dish['is_available'] ? 'checked' : '' ?>>
                        <label for="available_<?= (int) $dish['id'] ?>">
                            الطبق متاح للطلب
                        </label>
                    </div>

                    <?php foreach ($languages as $code => $label): ?>
                        <h3 class="language-title">
                            بيانات اللغة <?= dishes_h($label) ?>
                        </h3>

                        <div class="grid">
                            <div>
                                <label>اسم الطبق</label>
                                <input name="names[<?= $code ?>]"
                                       maxlength="200"
                                       value="<?= dishes_h(
                                           $dish['names'][$code] ?? ''
                                       ) ?>"
                                       required>
                            </div>

                            <div>
                                <label>وصف الطبق</label>
                                <textarea name="descriptions[<?= $code ?>]"><?= dishes_h(
                                    $dish['descriptions'][$code] ?? ''
                                ) ?></textarea>
                            </div>
                        </div>
                    <?php endforeach; ?>

                    <div class="actions">
                        <button type="submit">حفظ التعديلات</button>
                    </div>
                </form>

                <form method="post">
                    <input type="hidden" name="csrf_token"
                           value="<?= dishes_h($csrfToken) ?>">
                    <input type="hidden" name="action" value="toggle">
                    <input type="hidden" name="dish_id"
                           value="<?= (int) $dish['id'] ?>">

                    <div class="actions">
                        <button type="submit"
                                class="<?= $dish['is_available'] ? 'danger' : 'secondary' ?>">
                            <?= $dish['is_available']
                                ? 'إخفاء الطبق'
                                : 'إظهار الطبق' ?>
                        </button>
                    </div>
                </form>

            </article>
        <?php endforeach; ?>
    </section>

</div>
</body>
</html>
