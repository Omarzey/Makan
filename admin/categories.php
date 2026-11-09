
<?php
/**
 * Ottoman Palace Restaurant - Category management
 */

declare(strict_types=1);

require_once __DIR__ . '/auth.php';
require_once dirname(__DIR__) . '/config.php';

require_admin();

function category_h(string $value): string
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
                $categoryId = (int) ($_POST['category_id'] ?? 0);
                $slug = trim((string) ($_POST['slug'] ?? ''));
                $sortOrder = filter_var(
                    $_POST['sort_order'] ?? 0,
                    FILTER_VALIDATE_INT
                );

                $names = $_POST['names'] ?? [];

                if (
                    !preg_match('/^[a-zA-Z0-9-]{2,100}$/', $slug)
                    || $sortOrder === false
                    || $sortOrder < 0
                    || !is_array($names)
                ) {
                    throw new InvalidArgumentException('تحقق من البيانات المدخلة.');
                }

                foreach ($languages as $code => $label) {
                    if (
                        !isset($names[$code])
                        || !is_string($names[$code])
                        || trim($names[$code]) === ''
                    ) {
                        throw new InvalidArgumentException(
                            'يجب إدخال اسم القسم بجميع اللغات.'
                        );
                    }

                    $names[$code] = trim($names[$code]);

                    if (mb_strlen($names[$code], 'UTF-8') > 150) {
                        throw new InvalidArgumentException(
                            'اسم القسم طويل جدًا.'
                        );
                    }
                }

                $pdo->beginTransaction();

                if ($action === 'add') {
                    $statement = $pdo->prepare(
                        'INSERT INTO categories (slug, sort_order, is_active)
                         VALUES (:slug, :sort_order, 1)'
                    );

                    $statement->execute([
                        'slug' => $slug,
                        'sort_order' => $sortOrder,
                    ]);

                    $categoryId = (int) $pdo->lastInsertId();
                } else {
                    if ($categoryId <= 0) {
                        throw new InvalidArgumentException('رقم القسم غير صحيح.');
                    }

                    $statement = $pdo->prepare(
                        'UPDATE categories
                         SET slug = :slug, sort_order = :sort_order
                         WHERE id = :id'
                    );

                    $statement->execute([
                        'slug' => $slug,
                        'sort_order' => $sortOrder,
                        'id' => $categoryId,
                    ]);

                    if ($statement->rowCount() === 0) {
                        $check = $pdo->prepare(
                            'SELECT id FROM categories WHERE id = :id'
                        );
                        $check->execute(['id' => $categoryId]);

                        if (!$check->fetch()) {
                            throw new InvalidArgumentException('القسم غير موجود.');
                        }
                    }
                }

                $translationStatement = $pdo->prepare(
                    'INSERT INTO category_translations
                     (category_id, language_code, name)
                     VALUES (:category_id, :language_code, :name)
                     ON DUPLICATE KEY UPDATE name = VALUES(name)'
                );

                foreach ($languages as $code => $label) {
                    $translationStatement->execute([
                        'category_id' => $categoryId,
                        'language_code' => $code,
                        'name' => $names[$code],
                    ]);
                }

                $pdo->commit();

                header('Location: categories.php?status=saved');
                exit;
            }

            if ($action === 'toggle') {
                $categoryId = (int) ($_POST['category_id'] ?? 0);

                if ($categoryId <= 0) {
                    throw new InvalidArgumentException('رقم القسم غير صحيح.');
                }

                $statement = $pdo->prepare(
                    'UPDATE categories
                     SET is_active = IF(is_active = 1, 0, 1)
                     WHERE id = :id'
                );

                $statement->execute(['id' => $categoryId]);

                if ($statement->rowCount() === 0) {
                    throw new InvalidArgumentException('القسم غير موجود.');
                }

                header('Location: categories.php?status=changed');
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

            error_log('Category management error: ' . $exception->getMessage());
            $message = 'تعذر حفظ البيانات. قد يكون رمز القسم مستخدمًا بالفعل.';
        }
    }
}

if (isset($_GET['status'])) {
    if ($_GET['status'] === 'saved') {
        $message = 'تم حفظ بيانات القسم بنجاح.';
        $messageType = 'success';
    } elseif ($_GET['status'] === 'changed') {
        $message = 'تم تغيير حالة القسم بنجاح.';
        $messageType = 'success';
    }
}

try {
    $statement = $pdo->query(
        'SELECT
            c.id,
            c.slug,
            c.sort_order,
            c.is_active,
            t.language_code,
            t.name
         FROM categories c
         LEFT JOIN category_translations t
            ON t.category_id = c.id
         ORDER BY c.sort_order ASC, c.id ASC'
    );

    $categories = [];

    foreach ($statement->fetchAll() as $row) {
        $id = (int) $row['id'];

        if (!isset($categories[$id])) {
            $categories[$id] = [
                'id' => $id,
                'slug' => $row['slug'],
                'sort_order' => (int) $row['sort_order'],
                'is_active' => (int) $row['is_active'],
                'names' => [],
            ];
        }

        if ($row['language_code'] !== null) {
            $categories[$id]['names'][$row['language_code']] = $row['name'];
        }
    }
} catch (PDOException $exception) {
    error_log('Category listing error: ' . $exception->getMessage());
    http_response_code(500);
    exit('تعذر تحميل الأقسام من قاعدة البيانات.');
}

$csrfToken = create_admin_csrf_token();
$adminUsername = (string) ($_SESSION['admin_username'] ?? 'Admin');
?>
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>إدارة الأقسام - Ottoman Palace</title>
    <style>
        * { box-sizing: border-box; }

        body {
            margin: 0;
            padding: 24px;
            background: #f3f4f2;
            color: #292d30;
            font-family: Arial, sans-serif;
        }

        .container {
            max-width: 1050px;
            margin: auto;
        }

        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 15px;
            flex-wrap: wrap;
            margin-bottom: 25px;
        }

        h1, h2 { color: #263b32; }

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
            margin-bottom: 7px;
            font-weight: bold;
        }

        input {
            width: 100%;
            padding: 11px;
            border: 1px solid #ccc;
            border-radius: 7px;
            font-size: 15px;
        }

        button, .link {
            display: inline-block;
            padding: 10px 15px;
            border: 0;
            border-radius: 7px;
            background: #263b32;
            color: #fff;
            text-decoration: none;
            cursor: pointer;
            font-size: 14px;
        }

        .secondary {
            background: #777;
        }

        .danger {
            background: #9b3434;
        }

        .actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            margin-top: 15px;
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

        .category {
            border-top: 1px solid #eee;
            padding: 20px 0;
        }

        .category:first-of-type {
            border-top: 0;
        }

        .status {
            font-size: 13px;
            color: #666;
            margin-bottom: 12px;
        }

        .inactive {
            color: #9b3434;
        }

        .active {
            color: #246b42;
        }

        .category form + form {
            display: inline;
        }

        @media (max-width: 600px) {
            body { padding: 14px; }
            .grid { grid-template-columns: 1fr; }
            .panel { padding: 16px; }
        }
    </style>
</head>
<body>
<div class="container">

    <header>
        <div>
            <h1>إدارة الأقسام</h1>
            <p>مرحبًا <?= category_h($adminUsername) ?></p>
        </div>

        <a class="link secondary" href="dashboard.php">
            العودة للوحة التحكم
        </a>
    </header>

    <?php if ($message !== ''): ?>
        <div class="message <?= $messageType === 'success' ? 'success' : '' ?>">
            <?= category_h($message) ?>
        </div>
    <?php endif; ?>

    <section class="panel">
        <h2>إضافة قسم جديد</h2>

        <form method="post">
            <input type="hidden" name="csrf_token"
                   value="<?= category_h($csrfToken) ?>">
            <input type="hidden" name="action" value="add">

            <div class="grid">
                <div>
                    <label for="new_slug">رمز القسم بالإنجليزية</label>
                    <input id="new_slug" name="slug"
                           placeholder="مثال: soups"
                           pattern="[a-zA-Z0-9-]{2,100}"
                           maxlength="100" required>
                </div>

                <div>
                    <label for="new_order">ترتيب الظهور</label>
                    <input id="new_order" name="sort_order"
                           type="number" min="0" value="14" required>
                </div>

                <?php foreach ($languages as $code => $label): ?>
                    <div>
                        <label for="new_<?= $code ?>">
                            الاسم باللغة <?= category_h($label) ?>
                        </label>
                        <input id="new_<?= $code ?>"
                               name="names[<?= $code ?>]"
                               maxlength="150" required>
                    </div>
                <?php endforeach; ?>
            </div>

            <div class="actions">
                <button type="submit">إضافة القسم</button>
            </div>
        </form>
    </section>

    <section class="panel">
        <h2>الأقسام الحالية (<?= count($categories) ?>)</h2>

        <?php if (empty($categories)): ?>
            <p>لا توجد أقسام حتى الآن.</p>
        <?php endif; ?>

        <?php foreach ($categories as $category): ?>
            <div class="category">
                <div class="status">
                    رقم القسم: <?= (int) $category['id'] ?>
                    |
                    الحالة:
                    <strong class="<?= $category['is_active'] ? 'active' : 'inactive' ?>">
                        <?= $category['is_active'] ? 'نشط' : 'مخفي' ?>
                    </strong>
                </div>

                <form method="post">
                    <input type="hidden" name="csrf_token"
                           value="<?= category_h($csrfToken) ?>">
                    <input type="hidden" name="action" value="update">
                    <input type="hidden" name="category_id"
                           value="<?= (int) $category['id'] ?>">

                    <div class="grid">
                        <div>
                            <label>رمز القسم</label>
                            <input name="slug"
                                   value="<?= category_h($category['slug']) ?>"
                                   pattern="[a-zA-Z0-9-]{2,100}"
                                   maxlength="100" required>
                        </div>

                        <div>
                            <label>ترتيب الظهور</label>
                            <input name="sort_order" type="number" min="0"
                                   value="<?= (int) $category['sort_order'] ?>"
                                   required>
                        </div>

                        <?php foreach ($languages as $code => $label): ?>
                            <div>
                                <label>
                                    الاسم باللغة <?= category_h($label) ?>
                                </label>
                                <input
                                    name="names[<?= $code ?>]"
                                    value="<?= category_h(
                                        $category['names'][$code] ?? ''
                                    ) ?>"
                                    maxlength="150" required>
                            </div>
                        <?php endforeach; ?>
                    </div>

                    <div class="actions">
                        <button type="submit">حفظ التعديلات</button>
                    </div>
                </form>

                <form method="post">
                    <input type="hidden" name="csrf_token"
                           value="<?= category_h($csrfToken) ?>">
                    <input type="hidden" name="action" value="toggle">
                    <input type="hidden" name="category_id"
                           value="<?= (int) $category['id'] ?>">

                    <div class="actions">
                        <button type="submit"
                                class="<?= $category['is_active'] ? 'danger' : 'secondary' ?>">
                            <?= $category['is_active'] ? 'إخفاء القسم' : 'تفعيل القسم' ?>
                        </button>
                    </div>
                </form>
            </div>
        <?php endforeach; ?>
    </section>

</div>
</body>
</html>
