<?php
// DEV: show all errors in-browser
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// 1) Composer (FlightPHP, JWT, etc.)
require __DIR__ . '/../vendor/autoload.php';
require "middleware/AuthMiddleware.php";

use Firebase\JWT\JWT;
use Firebase\JWT\Key;
// 2) Load DB config
require_once __DIR__ . '/rest/dao/config.php';

// 3) Load Base classes
require_once __DIR__ . '/rest/dao/BaseDao.php';
require_once __DIR__ . '/rest/services/BaseService.php';

// 4) Autoload all DAOs (after BaseDao)
foreach (glob(__DIR__ . '/rest/dao/*.php') as $daoFile) {
    if (basename($daoFile) !== 'BaseDao.php' && basename($daoFile) !== 'config.php') {
        require_once $daoFile;
    }
}

// 5) Autoload all Services (after BaseService)
foreach (glob(__DIR__ . '/rest/services/*.php') as $svcFile) {
    if (basename($svcFile) !== 'BaseService.php') {
        require_once $svcFile;
    }
}

// 6) Map uncaught Exceptions → JSON
Flight::map('error', function (Throwable $ex) {
    http_response_code(500);
    header('Content-Type: application/json');
    echo json_encode([
        'error' => $ex->getMessage(),
        'file'  => $ex->getFile(),
        'line'  => $ex->getLine()
    ]);
});

// 7) Register your services
Flight::register('auth_service',        'AuthService');
Flight::register('auth_middleware', "AuthMiddleware");;
Flight::register('planService',         'PlansService');
Flight::register('reservationService',  'ReservationsService');
Flight::register('serviceService',      'ServicesService');
Flight::register('userService',         'UserService');
Flight::register('messageService',      'MessagesService');

// 8) JWT Middleware (wildcard route)
Flight::route('/*', function() {
    if(
        strpos(Flight::request()->url, '/auth/login') === 0 ||
        strpos(Flight::request()->url, '/auth/register') === 0 ||
        strpos(Flight::request()->url, '/services') === 0  ||
        strpos(Flight::request()->url, '/plans') === 0
    ) {
        return TRUE;
    } else {
        try {
            $token = Flight::request()->getHeader("Authentication");
            if(Flight::auth_middleware()->verifyToken($token))
                return TRUE;
        } catch (\Exception $e) {
            Flight::halt(401, $e->getMessage());
        }
    }
});

// 9) Include all your route definitions (except AuthRoutes, load it first if needed)
require_once __DIR__ . '/rest/routes/AuthRoutes.php';
foreach (glob(__DIR__ . '/rest/routes/*Routes.php') as $routeFile) {
    if (basename($routeFile) !== 'AuthRoutes.php') {
        require_once $routeFile;
    }
}

// 10) Health check
Flight::route('/', function(){
    echo 'Welcome to the API!';
});

// 11) Dispatch
Flight::start();