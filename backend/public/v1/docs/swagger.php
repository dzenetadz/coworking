<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);
require __DIR__ . '/../../../vendor/autoload.php';

if (in_array($_SERVER['SERVER_NAME'], ['localhost', '127.0.0.1'])) {
    define('BASE_URL', 'http://localhost/coworking/backend');
} else {
    define('BASE_URL', 'https://coworking-app-kmazu.ondigitalocean.app/');
}

header('Content-Type: application/json');

try {
    // Log which directories we’re scanning
    error_log("[Swagger] Scanning directories:");
    $paths = [
        __DIR__ . '/doc_setup.php',
        __DIR__ . '/../../../rest/routes'
    ];
    foreach ($paths as $p) {
        error_log("  - $p");
        if (!file_exists($p)) {
            error_log("    (!) Path does not exist");
        }
    }

    // Generate
    $openapi = \OpenApi\Generator::scan($paths);

    // Dump a summary of what was found
    $allPaths = array_keys($openapi->paths ?? []);
    error_log("[Swagger] Discovered " . count($allPaths) . " endpoint(s): " . implode(', ', $allPaths));

    echo $openapi->toJson();
} catch (\Throwable $e) {
    // Return a 500 with full exception details
    http_response_code(500);
    $err = [
        'error'       => 'Swagger generation failed',
        'message'     => $e->getMessage(),
        'stack_trace' => explode("\n", $e->getTraceAsString()),
    ];
    // also log it
    error_log("[Swagger][ERROR] " . $e->getMessage());
    echo json_encode($err, JSON_PRETTY_PRINT);
}
