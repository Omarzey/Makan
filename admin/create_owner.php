
<?php
/**
 * Ottoman Palace Restaurant - One-time owner setup
 * Delete this file after creating the first owner account.
 */

declare(strict_types=1);

require_once dirname(__DIR__) . '/config.php';
require_once __DIR__ . '/auth.php';

start_admin_session();

$setupToken = getenv('ADMIN_SETUP_TOKEN');
$message = '';
$success = false;

function escape_html(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES, 'UTF-8');
}

try {
    $adminCount = (int) $pdo->query(
        'SELECT COUNT(*) FROM admin_users'
    )->fetchColumn();
} catch (PDOException $exception) {
    error_log('Owner setup database error: ' . $exception->getMessage());
    http_response_code(500);
    exit('حدث خطأ في الاتصال بقاعدة البيانات.');
}

if ($adminCount > 0) {
    http_response_code(403);
    exit('تم إنشاء حساب مسؤول بالفعل. احذف هذا الملف من الخادم.');
}

if (!is_string($setupToken) || strlen($setupToken) < 32) {
    http_response_code(503);
    exit('إعداد مفتاح إنشاء المسؤول غير مكتمل.');
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $submittedToken = (string) ($_POST['setup_token'] ?? '');
    $csrfToken = (string) ($_POST['csrf_token'] ?? '');
    $username = trim((string) ($_POST['username'] ?? ''));
    $password = (string) ($_POST['password'] ?? '');
    $confirmPassword = (string) ($_POST['confirm_password'] ?? '');

    if (!hash_equals($setupToken, $submittedToken)) {
        $message = 'مفتاح الإعداد غير صحيح.';
    } elseif (!verify_admin_csrf_token($csrfToken)) {
        $message = 'انتهت صلاحية الصفحة. أعد تحميلها.';
    } elseif (!preg_match('/^[a-zA-Z0-9_.-]{3,80}$/', $username)) {
        $message = 'اسم المستخدم يجب أن يكون من 3 إلى 80 حرفًا أو رقمًا.';
    } elseif (strlen($password) < 12) {
        $message = 'كلمة المرور يجب ألا تقل عن 12 حرفًا.';
    } elseif ($password !== $confirmPassword) {
        $message = 'كلمتا المرور غير متطابقتين.';
    } else {
        try {
            $pdo->beginTransaction();

            $adminCount = (int) $pdo->query(
                'SELECT COUNT(*) FROM admin_users FOR UPDATE'
            )->fetchColumn();

            if ($adminCount > 0) {
                $pdo->rollBack();
                $message = 'تم إنشاء حساب مسؤول بالفعل.';
            } else {
                $passwordHash = password_hash(
                    $password,
                    PASSWORD_DEFAULT
                );

                $statement = $pdo->prepare(
                    'INSERT INTO admin_users
                    (username, password_hash, role, is_active)
                    VALUES (:username, :password_hash, :role, 1)'
                );

                $statement->execute([
                    'username' => $username,
                    'password_hash' => $passwordHash,
                    'role' => 'owner',
                ]);

                $pdo->commit();
                $success = true;
                $_SESSION['admin_csrf_token'] = bin2hex(random_bytes(32));
            }
        } catch (PDOException $exception) {
            if ($pdo->inTransaction()) {
                $pdo->rollBack();
            }

            error_log('Owner creation failed: ' . $exception->getMessage());
            $message = 'تعذر إنشاء الحساب. تحقق من البيانات وحاول مرة أخرى.';
        }
    }
}

$csrf = create_admin_csrf_token();
?>
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>إنشاء حساب المسؤول</title>
    <style>
        * { box-sizing: border-box; }
        body {
            margin: 0;
            min-height: 100vh;
            display: grid;
            place-items: center;
            padding: 20px;
            background: #f3f4f2;
            font-family: Arial, sans-serif;
            color: #292d30;
        }
        .panel {
            width: 100%;
            max-width: 440px;
            padding: 30px;
            background: #fff;
            border-radius: 14px;
            border: 1px solid #e5e5e5;
        }
        h1 { color: #263b32; font-size: 23px; }
        label { display: block; margin: 16px 0 7px; }
        input {
            width: 100%;
            padding: 12px;
            border: 1px solid #ccc;
            border-radius: 7px;
            font-size: 15px;
        }
        button {
            width: 100%;
            margin-top: 22px;
            padding: 13px;
            border: 0;
            border-radius: 7px;
            background: #263b32;
            color: white;
            font-size: 16px;
            cursor: pointer;
        }
        .message { color: #a32626; line-height: 1.7; }
        .success { color: #246b42; line-height: 1.8; }
        .hint { color: #666; font-size: 13px; line-height: 1.7; }
    </style>
</head>
<body>
<main class="panel">
    <h1>إنشاء حساب المسؤول الأول</h1>

    <?php if ($success): ?>
        <p class="success">
            تم إنشاء حساب المسؤول بنجاح.
            احذف ملف create_owner.php من الخادم، ثم سجّل الدخول.
        </p>
    <?php else: ?>
        <?php if ($message !== ''): ?>
            <p class="message"><?= escape_html($message) ?></p>
        <?php endif; ?>

        <form method="post">
            <input type="hidden" name="csrf_token"
                   value="<?= escape_html($csrf) ?>">

            <label for="setup_token">مفتاح الإعداد السري</label>
            <input id="setup_token" name="setup_token"
                   type="password" required autocomplete="off">

            <label for="username">اسم المستخدم</label>
            <input id="username" name="username"
                   type="text" minlength="3" maxlength="80"
                   pattern="[a-zA-Z0-9_.-]+"
                   required autocomplete="username">

            <label for="password">كلمة المرور</label>
            <input id="password" name="password"
                   type="password" minlength="12"
                   required autocomplete="new-password">

            <label for="confirm_password">تأكيد كلمة المرور</label>
            <input id="confirm_password" name="confirm_password"
                   type="password" minlength="12"
                   required autocomplete="new-password">

            <p class="hint">
                استخدم كلمة مرور قوية لا تقل عن 12 حرفًا.
            </p>

            <button type="submit">إنشاء حساب المسؤول</button>
        </form>
    <?php endif; ?>
</main>
</body>
</html>
