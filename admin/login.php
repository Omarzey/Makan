<?php
/**
 * Ottoman Palace Restaurant - Admin login
 */

declare(strict_types=1);

require_once __DIR__ . '/auth.php';
require_once dirname(__DIR__) . '/config.php';

start_admin_session();

if (isset($_SESSION['admin_id'])) {
    header('Location: dashboard.php');
    exit;
}

$errorMessage = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $submittedToken = isset($_POST['csrf_token']) && is_string($_POST['csrf_token'])
        ? $_POST['csrf_token']
        : null;

    if (!verify_admin_csrf_token($submittedToken)) {
        $errorMessage = 'انتهت صلاحية النموذج. حدّث الصفحة وحاول مرة أخرى.';
    } else {
        $username = isset($_POST['username']) && is_string($_POST['username'])
            ? trim($_POST['username'])
            : '';

        $password = isset($_POST['password']) && is_string($_POST['password'])
            ? $_POST['password']
            : '';

        if ($username === '' || $password === '') {
            $errorMessage = 'أدخل اسم المستخدم وكلمة المرور.';
        } else {
            $statement = $pdo->prepare(
                'SELECT id, username, password_hash, role
                 FROM admin_users
                 WHERE username = :username AND is_active = 1
                 LIMIT 1'
            );
            $statement->execute(['username' => $username]);
            $admin = $statement->fetch();

            if (
                $admin
                && is_string($admin['password_hash'])
                && password_verify($password, $admin['password_hash'])
            ) {
                $adminId = (int) $admin['id'];
                $adminRole = (string) $admin['role'];

                establish_admin_session(
                    $adminId,
                    (string) $admin['username'],
                    $adminRole
                );

                $updateLogin = $pdo->prepare(
                    'UPDATE admin_users SET last_login_at = NOW() WHERE id = :id'
                );
                $updateLogin->execute(['id' => $adminId]);

                header('Location: dashboard.php');
                exit;
            }

            $errorMessage = 'اسم المستخدم أو كلمة المرور غير صحيحة.';
        }
    }
}

$csrfToken = create_admin_csrf_token();
?>
<!doctype html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="noindex, nofollow">
    <title>تسجيل دخول الإدارة | Ottoman Palace</title>
    <style>
        :root {
            color-scheme: light;
            --green: #263B32;
            --gold: #B69A60;
            --text: #292D30;
            --muted: #707875;
            --border: #e5e8e6;
            --surface: #ffffff;
            --background: #f4f5f3;
        }

        * { box-sizing: border-box; }

        body {
            margin: 0;
            min-height: 100vh;
            display: grid;
            place-items: center;
            padding: 24px;
            background: var(--background);
            color: var(--text);
            font-family: Tahoma, Arial, sans-serif;
        }

        .login-card {
            width: 100%;
            max-width: 420px;
            padding: 36px;
            background: var(--surface);
            border: 1px solid var(--border);
            border-radius: 16px;
            box-shadow: 0 14px 40px rgba(25, 38, 31, .07);
        }

        .brand {
            margin: 0 0 8px;
            color: var(--green);
            text-align: center;
            font-family: Georgia, serif;
            font-size: 25px;
            letter-spacing: .3px;
        }

        .subtitle {
            margin: 0 0 28px;
            color: var(--muted);
            text-align: center;
            font-size: 14px;
        }

        label {
            display: block;
            margin: 16px 0 8px;
            font-size: 14px;
            font-weight: 700;
        }

        input {
            width: 100%;
            min-height: 46px;
            padding: 11px 13px;
            border: 1px solid var(--border);
            border-radius: 9px;
            background: #fff;
            color: var(--text);
            font: inherit;
        }

        input:focus {
            outline: 2px solid rgba(182, 154, 96, .35);
            border-color: var(--gold);
        }

        button {
            width: 100%;
            min-height: 48px;
            margin-top: 24px;
            border: 0;
            border-radius: 9px;
            background: var(--green);
            color: #fff;
            font: inherit;
            font-weight: 700;
            cursor: pointer;
        }

        button:hover { background: #1d3028; }

        .error {
            margin: 0 0 18px;
            padding: 12px;
            border: 1px solid #e8caca;
            border-radius: 8px;
            background: #fff5f5;
            color: #8c2929;
            font-size: 13px;
            line-height: 1.6;
        }

        @media (max-width: 480px) {
            .login-card { padding: 26px 22px; }
        }
    </style>
</head>
<body>
    <main class="login-card">
        <h1 class="brand">Ottoman Palace</h1>
        <p class="subtitle">لوحة التحكم — تسجيل الدخول</p>

        <?php if ($errorMessage !== ''): ?>
            <p class="error" role="alert">
                <?= htmlspecialchars($errorMessage, ENT_QUOTES, 'UTF-8') ?>
            </p>
        <?php endif; ?>

        <form method="post" action="login.php" autocomplete="on">
            <input
                type="hidden"
                name="csrf_token"
                value="<?= htmlspecialchars($csrfToken, ENT_QUOTES, 'UTF-8') ?>"
            >

            <label for="username">اسم المستخدم</label>
            <input
                id="username"
                name="username"
                type="text"
                autocomplete="username"
                maxlength="80"
                required
            >

            <label for="password">كلمة المرور</label>
            <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
            >

            <button type="submit">تسجيل الدخول</button>
        </form>
    </main>
</body>
</html>
