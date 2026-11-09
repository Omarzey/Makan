<?php
/**
 * Public menu API.
 * Returns the active menu in the structure used by the existing js/menu.js.
 * Endpoint: /api/menu.php
 */

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: public, max-age=60');

try {
    require_once dirname(__DIR__) . '/config.php';

    $languages = ['zh', 'en', 'ar', 'tr'];

    $sql = "
        SELECT
            c.id AS category_id,
            c.sort_order AS category_order,
            ct.language_code AS category_language,
            ct.name AS category_name,
            d.id AS dish_id,
            d.price,
            d.image_filename,
            d.is_signature,
            d.sort_order AS dish_order,
            dt.language_code AS dish_language,
            dt.name AS dish_name
        FROM categories c
        INNER JOIN category_translations ct
            ON ct.category_id = c.id
        LEFT JOIN dishes d
            ON d.category_id = c.id
            AND d.is_available = 1
        LEFT JOIN dish_translations dt
            ON dt.dish_id = d.id
        WHERE c.is_active = 1
        ORDER BY c.sort_order, c.id, d.sort_order, d.id
    ";

    $rows = $pdo->query($sql)->fetchAll();

    $menu = [];
    $categoryIndexes = [];

    foreach ($rows as $row) {
        $categoryId = (int) $row['category_id'];

        if (!isset($categoryIndexes[$categoryId])) {
            $categoryIndexes[$categoryId] = count($menu);
            $menu[] = [
                'n' => [],
                'd' => [],
                '_dish_indexes' => [],
            ];
        }

        $categoryIndex = $categoryIndexes[$categoryId];
        $categoryLanguage = $row['category_language'];

        if (in_array($categoryLanguage, $languages, true)) {
            $menu[$categoryIndex]['n'][$categoryLanguage] = $row['category_name'];
        }

        if ($row['dish_id'] === null) {
            continue;
        }

        $dishId = (int) $row['dish_id'];

        if (!isset($menu[$categoryIndex]['_dish_indexes'][$dishId])) {
            $menu[$categoryIndex]['_dish_indexes'][$dishId] =
                count($menu[$categoryIndex]['d']);

            $menu[$categoryIndex]['d'][] = [
                'p' => (float) $row['price'],
                'img' => $row['image_filename'],
                'signature' => (bool) $row['is_signature'],
            ];
        }

        $dishIndex = $menu[$categoryIndex]['_dish_indexes'][$dishId];
        $dishLanguage = $row['dish_language'];

        if ($dishLanguage !== null && in_array($dishLanguage, $languages, true)) {
            $menu[$categoryIndex]['d'][$dishIndex][$dishLanguage] = $row['dish_name'];
        }
    }

    foreach ($menu as &$category) {
        unset($category['_dish_indexes']);

        foreach ($category['d'] as &$dish) {
            if ($dish['img'] === null || $dish['img'] === '') {
                unset($dish['img']);
            }

            if (!$dish['signature']) {
                unset($dish['signature']);
            }
        }
        unset($dish);
    }
    unset($category);

    echo json_encode(
        $menu,
        JSON_UNESCAPED_UNICODE
        | JSON_UNESCAPED_SLASHES
        | JSON_INVALID_UTF8_SUBSTITUTE
    );
} catch (Throwable $exception) {
    error_log('Menu API error: ' . $exception->getMessage());

    http_response_code(500);
    echo json_encode(
        ['error' => 'Unable to load the menu at this time.'],
        JSON_UNESCAPED_UNICODE
    );
}
