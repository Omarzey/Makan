
<?php

declare(strict_types=1);

/*
|--------------------------------------------------------------------------
| Database Connection Loader
|--------------------------------------------------------------------------
*/

$configFile = dirname(__DIR__) . '/config/config.php';

if (!file_exists($configFile)) {
    throw new RuntimeException(
        'Database configuration file is missing.'
    );
}

require_once $configFile;

$pdo = getDatabaseConnection();
