<?php
// right after your other requires:
require_once __DIR__ . '/../../data/roles.php';

Flight::route('GET /plans', function () {

    Flight::json(Flight::planService()->getAll());
});
// GET single plan
Flight::route('GET /plans/@id', function ($id) {
    Flight::json(Flight::planService()->getById($id));
});

// POST (create) plan
Flight::route('POST /plans', function () {
    Flight::auth_middleware()->authorizeAdmin();
    $data = Flight::request()->data->getData();
    Flight::json(Flight::planService()->createPlan($data));
});

// PUT (replace) plan
Flight::route('PUT /plans/@id', function ($id) {
    Flight::auth_middleware()->authorizeAdmin();
    $data = Flight::request()->data->getData();
    Flight::json(Flight::planService()->update($id, $data));
});

// PATCH (partial update)
Flight::route('PATCH /plans/@id', function ($id) {
    Flight::auth_middleware()->authorizeAdmin();
    $data = Flight::request()->data->getData();
    Flight::json(Flight::planService()->update($id, $data));
});

// DELETE plan
Flight::route('DELETE /plans/@id', function ($id) {
    Flight::auth_middleware()->authorizeAdmin();
    Flight::planService()->delete($id);

    // return the updated list of plans
    $allPlans = Flight::planService()->getAll();
    Flight::json($allPlans);
});
