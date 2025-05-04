<?php
// DEV: show all errors in-browser
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// 1) Composer (FlightPHP, etc.)
require 'vendor/autoload.php';

// 2) Load your DB config (adjust path if needed)
require_once __DIR__ . '/rest/dao/config.php';

// 3) Load Base classes
require_once __DIR__ . '/rest/dao/BaseDao.php';
require_once __DIR__ . '/rest/services/BaseService.php';

// 4) Autoload all DAOs (after BaseDao)
foreach (glob(__DIR__ . '/rest/dao/*.php') as $daoFile) {
    // skip BaseDao.php and config.php since already loaded
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

// 6) Map uncaught Exceptions into JSON
Flight::map('error', function (Throwable $ex) {
    http_response_code(500);
    header('Content-Type: application/json');
    echo json_encode([
        'error' => $ex->getMessage(),
        'file'  => $ex->getFile(),
        'line'  => $ex->getLine()
    ]);
});

// 7) Register your services with Flight
Flight::register('planService',        'PlansService');
Flight::register('reservationService', 'ReservationsService');
Flight::register('serviceService',     'ServicesService');
Flight::register('userService',        'UserService');
Flight::register('messageService',     'MessagesService');

// 8) Include all your route definitions
foreach (glob(__DIR__ . '/rest/routes/*Routes.php') as $routeFile) {
    require_once $routeFile;
}

// 9) Health check
Flight::route('/', function(){
    echo 'Welcome to the API!';
});

// 10) Dispatch
Flight::start();