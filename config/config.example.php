<?php

declare(strict_types=1);

/*
|--------------------------------------------------------------------------
| Database Configuration
|--------------------------------------------------------------------------
| Copy this file to config.php and enter your database credentials there.
| Never upload config.php with real credentials to a public repository.
*/

define('DB_HOST', getenv('DB_HOST') ?: 'localhost');
define('DB_NAME', getenv('DB_NAME') ?: 'makan');
define('DB_USER', getenv('DB_USER') ?: 'YOUR_DATABASE_USERNAME');
define('DB_PASS', getenv('DB_PASS') ?: 'YOUR_DATABASE_PASSWORD');
define('DB_CHARSET', 'utf8mb4');

/*
|--------------------------------------------------------------------------
| PDO Connection
|--------------------------------------------------------------------------
*/

function getDatabaseConnection(): PDO
{
    static $pdo = null;

    if ($pdo instanceof PDO) {
        return $pdo;
    }

    $dsn = 'mysql:host=' . DB_HOST
         . ';dbname=' . DB_NAME
         . ';charset=' . DB_CHARSET;

    try {
        $pdo = new PDO($dsn, DB_USER, DB_PASS, [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES   => false,
        ]);

        return $pdo;

    } catch (PDOException $e) {
        error_log('Database connection failed: ' . $e->getMessage());

        throw new RuntimeException(
            'Unable to connect to the database.'
        );
    }
}
