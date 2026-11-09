<?php
/**
 * Ottoman Palace Restaurant
 * Database connection configuration.
 *
 * Set these environment variables in your hosting control panel:
 * DB_HOST, DB_NAME, DB_USER, DB_PASS
 *
 * Never commit real database credentials to a public GitHub repository.
 */

declare(strict_types=1);

$requiredEnv = ['DB_HOST', 'DB_NAME', 'DB_USER', 'DB_PASS'];
$dbConfig = [];

foreach ($requiredEnv as $key) {
    $value = getenv($key);

    if ($value === false || $value === '') {
        throw new RuntimeException(
            'Missing required database environment variable: ' . $key
        );
    }

    $dbConfig[$key] = $value;
}

$dsn = sprintf(
    'mysql:host=%s;dbname=%s;charset=utf8mb4',
    $dbConfig['DB_HOST'],
    $dbConfig['DB_NAME']
);

try {
    $pdo = new PDO(
        $dsn,
        $dbConfig['DB_USER'],
        $dbConfig['DB_PASS'],
        [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES   => false,
        ]
    );
} catch (PDOException $exception) {
    error_log('Database connection failed: ' . $exception->getMessage());

    throw new RuntimeException(
        'Unable to connect to the database. Check the server configuration.'
    );
}
