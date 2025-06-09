<?php

// GET all users
Flight::route('GET /users', function () {
    Flight::auth_middleware()->authorizeRoles([Roles::ADMIN]);
    Flight::json(Flight::userService()->getAll());
});

// GET single user
Flight::route('GET /users/@id', function ($id) {
    Flight::auth_middleware()->authorizeRoles([Roles::ADMIN, Roles::USER]);
    Flight::json(Flight::userService()->getById($id));
});

// POST register user
Flight::route('POST /users', function () {
    Flight::auth_middleware()->authorizeRoles([Roles::ADMIN]);
    $data = Flight::request()->data->getData();
    Flight::json(Flight::userService()->registerUser($data));
});

// PUT replace user
Flight::route('PUT /users/@id', function ($id) {
    Flight::auth_middleware()->authorizeRoles([Roles::ADMIN]);
    $data = Flight::request()->data->getData();
    Flight::json(Flight::userService()->update($id, $data));
});

// PATCH update user
Flight::route('PATCH /users/@id', function ($id) {
    Flight::auth_middleware()->authorizeRoles([Roles::ADMIN]);
    $data = Flight::request()->data->getData();
    Flight::json(Flight::userService()->update($id, $data));
});

// DELETE user
Flight::route('DELETE /users/@id', function ($id) {
    Flight::auth_middleware()->authorizeRoles([Roles::ADMIN]);
    Flight::json(Flight::userService()->delete($id));
});
?>