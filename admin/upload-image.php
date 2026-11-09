<?php
declare(strict_types=1);

/**
 * Secure dish image uploader.
 * Accepts genuine WebP images only.
 * Stores images in the root /images directory.
 */

require_once __DIR__ . '/auth.php';

require_admin();

$message = '';
$error = '';
$uploadedFilename = '';

$maxFileSize = 5 * 1024 * 1024; // 5 MB
$imagesDirectory = dirname(__DIR__) . '/images';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $csrfToken = (string) ($_POST['csrf_token'] ?? '');

    if (!verify_admin_csrf_token($csrfToken)) {
        $error = 'انتهت صلاحية الطلب. أعد تحميل الصفحة وحاول مرة أخرى.';
    } elseif (!isset($_FILES['dish_image'])) {
        $error = 'لم يتم اختيار صورة.';
    } else {
        $file = $_FILES['dish_image'];

        try {
            if (!is_array($file) || !isset($file['error'], $file['tmp_name'])) {
                throw new RuntimeException('بيانات الملف غير صحيحة.');
            }

            if ($file['error'] !== UPLOAD_ERR_OK) {
                $uploadErrors = [
                    UPLOAD_ERR_INI_SIZE => 'حجم الصورة أكبر من الحد المسموح به على الخادم.',
                    UPLOAD_ERR_FORM_SIZE => 'حجم الصورة أكبر من الحد المسموح به.',
                    UPLOAD_ERR_PARTIAL => 'لم يتم رفع الصورة بالكامل.',
                    UPLOAD_ERR_NO_FILE => 'لم يتم اختيار صورة.',
                    UPLOAD_ERR_NO_TMP_DIR => 'مجلد الملفات المؤقتة غير متاح على الخادم.',
                    UPLOAD_ERR_CANT_WRITE => 'تعذرت كتابة الملف على الخادم.',
                    UPLOAD_ERR_EXTENSION => 'تم إيقاف رفع الملف بواسطة إعدادات الخادم.',
                ];

                throw new RuntimeException(
                    $uploadErrors[$file['error']] ?? 'حدث خطأ أثناء رفع الصورة.'
                );
            }

            if (
                !isset($file['size'])
                || !is_int($file['size'])
                || $file['size'] <= 0
                || $file['size'] > $maxFileSize
            ) {
                throw new RuntimeException('حجم الصورة يجب ألا يتجاوز 5 ميجابايت.');
            }

            $temporaryFile = (string) $file['tmp_name'];

            if (!is_uploaded_file($temporaryFile)) {
                throw new RuntimeException('مصدر الملف غير صالح.');
            }

            if (!is_dir($imagesDirectory) || !is_writable($imagesDirectory)) {
                throw new RuntimeException(
                    'مجلد images غير موجود أو لا يسمح بحفظ الملفات. راجع صلاحيات الاستضافة.'
                );
            }

            $fileInfo = new finfo(FILEINFO_MIME_TYPE);
            $mimeType = $fileInfo->file($temporaryFile);

            if ($mimeType !== 'image/webp') {
                throw new RuntimeException(
                    'نوع الصورة غير مدعوم. ارفع صورة بصيغة WebP فقط.'
                );
            }

            $imageInfo = getimagesize($temporaryFile);

            if (
                $imageInfo === false
                || ($imageInfo[2] ?? null) !== IMAGETYPE_WEBP
            ) {
                throw new RuntimeException('الملف ليس صورة WebP سليمة.');
            }

            $width = (int) ($imageInfo[0] ?? 0);
            $height = (int) ($imageInfo[1] ?? 0);

            if (
                $width <= 0
                || $height <= 0
                || $width > 6000
                || $height > 6000
                || ($width * $height) > 25000000
            ) {
                throw new RuntimeException('أبعاد الصورة أكبر من الحدود المسموح بها.');
            }

            $uploadedFilename = 'dish_' . bin2hex(random_bytes(12));
            $destination = $imagesDirectory . '/' . $uploadedFilename . '.webp';

            if (!move_uploaded_file($temporaryFile, $destination)) {
                throw new RuntimeException('تعذر حفظ الصورة على الخادم.');
            }

            @chmod($destination, 0644);

            $message = 'تم رفع الصورة بنجاح. استخدم اسم الملف الظاهر بالأسفل في بيانات الطبق.';

        } catch (RuntimeException $exception) {
            $error = $exception->getMessage();
        } catch (Throwable $exception) {
            $error = 'حدث خطأ غير متوقع أثناء رفع الصورة. حاول مرة أخرى.';
        }
    }
}

$csrfToken = create_admin_csrf_token();

function escape_output(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES, 'UTF-8');
}
?>
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>رفع صورة طبق - Makan Admin</title>

    <style>
        * {
            box-sizing: border-box;
        }

        body {
            margin: 0;
            padding: 24px 16px;
            background: #f5f5f2;
            color: #292d30;
            font-family: Arial, Tahoma, sans-serif;
        }

        .container {
            width: 100%;
            max-width: 560px;
            margin: 40px auto;
            padding: 28px;
            background: #ffffff;
            border: 1px solid #e5e5df;
            border-radius: 14px;
        }

        h1 {
            margin: 0 0 10px;
            color: #263b32;
            font-size: 25px;
        }

        .description {
            margin-bottom: 25px;
            color: #666;
            line-height: 1.8;
        }

        label {
            display: block;
            margin-bottom: 10px;
            font-weight: bold;
        }

        input[type="file"] {
            display: block;
            width: 100%;
            padding: 14px;
            border: 1px dashed #b69a60;
            border-radius: 8px;
            background: #fafaf8;
        }

        button {
            width: 100%;
            margin-top: 18px;
            padding: 14px;
            border: 0;
            border-radius: 8px;
            background: #263b32;
            color: #ffffff;
            font-size: 16px;
            cursor: pointer;
        }

        button:hover {
            background: #354e43;
        }

        .notice {
            margin-top: 18px;
            padding: 14px;
            border-radius: 8px;
            line-height: 1.8;
        }

        .success {
            background: #edf6ef;
            color: #245b32;
            border: 1px solid #c9e5cf;
        }

        .error {
            background: #fff0ef;
            color: #9b2923;
            border: 1px solid #f0ceca;
        }

        .filename {
            display: block;
            margin-top: 10px;
            padding: 12px;
            direction: ltr;
            text-align: left;
            background: #f2f2ef;
            border-radius: 6px;
            font-family: monospace;
            font-size: 15px;
            overflow-wrap: anywhere;
            user-select: all;
        }

        .hint {
            margin-top: 20px;
            padding: 14px;
            background: #f7f5ef;
            border-right: 3px solid #b69a60;
            color: #555;
            line-height: 1.9;
            font-size: 14px;
        }

        .links {
            display: flex;
            justify-content: space-between;
            gap: 12px;
            margin-top: 24px;
        }

        .links a {
            color: #263b32;
            text-decoration: none;
            font-size: 14px;
        }
    </style>
</head>

<body>
    <main class="container">
        <h1>رفع صورة طبق</h1>

        <p class="description">
            اختر صورة الطبق من هاتفك لرفعها إلى موقع المطعم.
            الحد الأقصى لحجم الصورة 5 ميجابايت.
        </p>

        <form method="POST" enctype="multipart/form-data">
            <input
                type="hidden"
                name="csrf_token"
                value="<?= escape_output($csrfToken) ?>"
            >

            <label for="dish_image">اختر صورة بصيغة WebP</label>

            <input
                type="file"
                id="dish_image"
                name="dish_image"
                accept="image/webp,.webp"
                required
            >

            <button type="submit">رفع الصورة</button>
        </form>

        <?php if ($message !== ''): ?>
            <div class="notice success">
                <?= escape_output($message) ?>

                <strong>اسم الصورة الذي ستضعه في بيانات الطبق:</strong>

                <code class="filename"><?= escape_output($uploadedFilename) ?></code>

                <p>
                    انسخ الاسم فقط، دون كتابة <b>.webp</b>.
                </p>
            </div>
        <?php endif; ?>

        <?php if ($error !== ''): ?>
            <div class="notice error">
                <?= escape_output($error) ?>
            </div>
        <?php endif; ?>

        <div class="hint">
            <strong>ملاحظة:</strong>
            الصور بصيغة JPG أو PNG لن تُقبل مباشرة.
            يجب تحويلها إلى WebP قبل رفعها، حتى تعمل مع نظام عرض الصور الحالي بالموقع.
        </div>

        <div class="links">
            <a href="dishes.php">العودة إلى إدارة الأطباق</a>
            <a href="dashboard.php">لوحة التحكم</a>
        </div>
    </main>
</body>
</html>
