<?php

// GET all reservations
Flight::route('GET /reservations', function () {
    Flight::auth_middleware()->authorizeRoles([Roles::USER, Roles::ADMIN]);
    Flight::json(Flight::reservationService()->getAll());
});

// GET single reservation
Flight::route('GET /reservations/@id', function ($id) {
    Flight::auth_middleware()->authorizeRoles([Roles::ADMIN]);
    Flight::json(Flight::reservationService()->getById($id));
});

// GET reservations by member
Flight::route('GET /reservations/member/@memberId', function ($memberId) {
    Flight::auth_middleware()->authorizeRoles([Roles::ADMIN, Roles::USER]);
    Flight::json(Flight::reservationService()->getByMemberId($memberId));
});

// POST create reservation
Flight::route('POST /reservations', function () {
    Flight::auth_middleware()->authorizeRoles([Roles::ADMIN, Roles::USER]);
    $data = Flight::request()->data->getData();
    // this will throw on validation errors, etc.
    $newRes = Flight::reservationService()->createReservation($data);

    // if your service returns the newly‐inserted row, great:
    Flight::json([
        "success" => true,
        "reservation" => $newRes
    ]);
});

// PUT replace reservation
Flight::route('PUT /reservations/@id', function ($id) {
    Flight::auth_middleware()->authorizeRoles([Roles::ADMIN]);
    $data = Flight::request()->data->getData();
    Flight::json(Flight::reservationService()->update($id, $data));
});

// PATCH update reservation
Flight::route('PATCH /reservations/@id', function ($id) {
    Flight::auth_middleware()->authorizeRoles([Roles::ADMIN]);
    $data = Flight::request()->data->getData();
    Flight::json(Flight::reservationService()->update($id, $data));
});

// DELETE reservation
Flight::route('DELETE /reservations/@id', function ($id) {
    Flight::auth_middleware()->authorizeRoles([Roles::ADMIN]);
    Flight::json(Flight::reservationService()->delete($id));
});

?>