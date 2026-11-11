
<?php
/**
 * Ottoman Palace Restaurant - Admin dashboard
 */

declare(strict_types=1);

require_once __DIR__ . '/auth.php';
require_once dirname(__DIR__) . '/config.php';

require_admin();

$adminUsername = (string) ($_SESSION['admin_username'] ?? 'Admin');
$adminRole = (string) ($_SESSION['admin_role'] ?? 'editor');

$stats = [
    'categories' => 0,
    'dishes' => 0,
    'available' => 0,
];

try {
    $stats['categories'] = (int) $pdo->query(
        'SELECT COUNT(*) FROM categories WHERE is_active = 1'
    )->fetchColumn();

    $stats['dishes'] = (int) $pdo->query(
        'SELECT COUNT(*) FROM dishes'
    )->fetchColumn();

    $stats['available'] = (int) $pdo->query(
        'SELECT COUNT(*) FROM dishes WHERE is_available = 1'
    )->fetchColumn();
} catch (PDOException $exception) {
    error_log('Admin dashboard statistics error: ' . $exception->getMessage());
}

function dashboard_escape(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES, 'UTF-8');
}
?>
<!doctype html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="noindex, nofollow">
    <title>لوحة التحكم | Ottoman Palace</title>
    <style>
        :root {
            --green: #263B32;
            --gold: #B69A60;
            --text: #292D30;
            --muted: #707875;
            --border: #e5e8e6;
            --background: #f4f5f3;
            --surface: #fff;
        }

        * { box-sizing: border-box; }

        body {
            margin: 0;
            background: var(--background);
            color: var(--text);
            font-family: Tahoma, Arial, sans-serif;
        }

        .topbar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
            padding: 18px max(22px, calc((100% - 1100px) / 2));
            background: var(--green);
            color: #fff;
        }

        .brand {
            margin: 0;
            font-family: Georgia, serif;
            font-size: 21px;
            font-weight: 600;
        }

        .topbar a {
            color: #fff;
            text-decoration: none;
            font-size: 13px;
        }

        .container {
            width: min(100% - 32px, 1100px);
            margin: 34px auto;
        }

        .welcome {
            margin-bottom: 26px;
        }

        .welcome h2 {
            margin: 0 0 8px;
            font-size: 24px;
        }

        .welcome p {
            margin: 0;
            color: var(--muted);
            font-size: 14px;
            line-height: 1.7;
        }

        .stats {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 16px;
        }

        .stat {
            padding: 22px;
            background: var(--surface);
            border: 1px solid var(--border);
            border-radius: 12px;
        }

        .stat span {
            display: block;
            color: var(--muted);
            font-size: 13px;
        }

        .stat strong {
            display: block;
            margin-top: 12px;
            color: var(--green);
            font-size: 30px;
            font-weight: 700;
        }

        .section-title {
            margin: 32px 0 14px;
            font-size: 19px;
        }

        .tools {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;
        }

        .tool {
            display: block;
            padding: 22px;
            color: var(--text);
            text-decoration: none;
            background: var(--surface);
            border: 1px solid var(--border);
            border-radius: 12px;
            transition: border-color .2s ease, transform .2s ease;
        }

        .tool:hover {
            border-color: var(--gold);
            transform: translateY(-2px);
        }

        .tool h3 {
            margin: 0 0 9px;
            color: var(--green);
            font-size: 17px;
        }

        .tool p {
            margin: 0;
            color: var(--muted);
            font-size: 13px;
            line-height: 1.8;
        }

        .tool .arrow {
            display: inline-block;
            margin-top: 15px;
            color: var(--gold);
            font-size: 13px;
            font-weight: 700;
        }

        .notice {
            margin-top: 22px;
            padding: 18px 20px;
            border: 1px solid #e9dfc9;
            border-right: 4px solid var(--gold);
            border-radius: 10px;
            background: #fffdf8;
            line-height: 1.8;
            font-size: 14px;
        }

        .notice strong { color: var(--green); }

        .account {
            margin-top: 24px;
            color: var(--muted);
            font-size: 13px;
        }

        @media (max-width: 650px) {
            .topbar { padding: 16px; }
            .stats, .tools { grid-template-columns: 1fr; }
            .container { margin-top: 25px; }
        }

        @media (prefers-reduced-motion: reduce) {
            .tool { transition: none; }
            .tool:hover { transform: none; }
        }
    </style>
</head>
<body>
    <header class="topbar">
        <h1 class="brand">Ottoman Palace</h1>
        <a href="logout.php">تسجيل الخروج</a>
    </header>

    <main class="container">
        <section class="welcome">
            <h2>لوحة التحكم</h2>
            <p>
                مرحبًا <?= dashboard_escape($adminUsername) ?>،
                يمكنك من هنا متابعة وإدارة بيانات قائمة المطعم.
            </p>
        </section>

        <section class="stats" aria-label="إحصائيات القائمة">
            <article class="stat">
                <span>الأقسام النشطة</span>
                <strong><?= $stats['categories'] ?></strong>
            </article>

            <article class="stat">
                <span>إجمالي الأطباق</span>
                <strong><?= $stats['dishes'] ?></strong>
            </article>

            <article class="stat">
                <span>الأطباق المتاحة</span>
                <strong><?= $stats['available'] ?></strong>
            </article>
        </section>

        <h2 class="section-title">إدارة المنيو</h2>

        <nav class="tools" aria-label="أدوات إدارة المنيو">
            <a class="tool" href="categories.php">
                <h3>إدارة الأقسام</h3>
                <p>
                    إضافة الأقسام وتعديل أسمائها وترتيبها
                    وإدارة ظهورها في المنيو.
                </p>
                <span class="arrow">فتح إدارة الأقسام ←</span>
            </a>

            <a class="tool" href="dishes.php">
                <h3>إدارة الأطباق</h3>
                <p>
                    إضافة الأطباق وتعديل بياناتها وأسعارها
                    وصورها وترجماتها وحالة توفرها.
                </p>
                <span class="arrow">فتح إدارة الأطباق ←</span>
            </a>
        </nav>

        <section class="notice">
            <strong>حالة النظام:</strong>
            لوحة التحكم مرتبطة بقاعدة البيانات لعرض الإحصائيات.
            يلزم اختبار وظائف الإدارة فعليًا بعد تشغيل الموقع
            على استضافة تدعم PHP وMySQL.
        </section>

        <p class="account">
            نوع الحساب:
            <?= $adminRole === 'owner' ? 'مالك' : 'محرر' ?>
        </p>
    </main>
</body>
</html>
