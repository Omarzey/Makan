
<?php
/**
 * Ottoman Palace Restaurant - Admin logout
 */

declare(strict_types=1);

require_once __DIR__ . '/auth.php';

start_admin_session();
destroy_admin_session();

header('Location: login.php');
exit;
