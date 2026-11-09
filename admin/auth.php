<?php
/**
 * Admin authentication helpers.
 *
 * Include this file from admin pages that require an authenticated session.
 * This file does not perform login; login.php will verify the password hash.
 */

declare(strict_types=1);

function start_admin_session(): void
{
    if (session_status() === PHP_SESSION_ACTIVE) {
        return;
    }

    ini_set('session.use_strict_mode', '1');
    ini_set('session.use_only_cookies', '1');

    $isHttps = (
        isset($_SERVER['HTTPS'])
        && $_SERVER['HTTPS'] !== ''
        && strtolower((string) $_SERVER['HTTPS']) !== 'off'
    );

    session_name('makan_admin_session');

    session_set_cookie_params([
        'lifetime' => 0,
        'path' => '/',
        'secure' => $isHttps,
        'httponly' => true,
        'samesite' => 'Strict',
    ]);

    session_start();
}

function require_admin(): void
{
    start_admin_session();

    if (
        !isset($_SESSION['admin_id'])
        || !is_int($_SESSION['admin_id'])
        || $_SESSION['admin_id'] <= 0
    ) {
        header('Location: login.php');
        exit;
    }
}

function create_admin_csrf_token(): string
{
    start_admin_session();

    if (
        !isset($_SESSION['admin_csrf_token'])
        || !is_string($_SESSION['admin_csrf_token'])
    ) {
        $_SESSION['admin_csrf_token'] = bin2hex(random_bytes(32));
    }

    return $_SESSION['admin_csrf_token'];
}

function verify_admin_csrf_token(?string $submittedToken): bool
{
    start_admin_session();

    if (
        $submittedToken === null
        || !isset($_SESSION['admin_csrf_token'])
        || !is_string($_SESSION['admin_csrf_token'])
    ) {
        return false;
    }

    return hash_equals($_SESSION['admin_csrf_token'], $submittedToken);
}

function establish_admin_session(int $adminId, string $username, string $role): void
{
    if ($adminId <= 0 || !in_array($role, ['owner', 'editor'], true)) {
        throw new InvalidArgumentException('Invalid administrator account.');
    }

    start_admin_session();
    session_regenerate_id(true);

    $_SESSION['admin_id'] = $adminId;
    $_SESSION['admin_username'] = $username;
    $_SESSION['admin_role'] = $role;
    $_SESSION['admin_csrf_token'] = bin2hex(random_bytes(32));
}

function destroy_admin_session(): void
{
    start_admin_session();

    $_SESSION = [];

    if (ini_get('session.use_cookies')) {
        $params = session_get_cookie_params();

        setcookie(session_name(), '', [
            'expires' => time() - 42000,
            'path' => $params['path'],
            'domain' => $params['domain'],
            'secure' => $params['secure'],
            'httponly' => $params['httponly'],
            'samesite' => $params['samesite'] ?? 'Strict',
        ]);
    }

    session_destroy();
}
