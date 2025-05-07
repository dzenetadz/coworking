<?php

// GET all reservations
Flight::route('GET /reservations', function(){
    Flight::json( Flight::reservationService()->getAll() );
});

// GET single reservation
Flight::route('GET /reservations/@id', function($id){
    Flight::json( Flight::reservationService()->getById($id) );
});

// GET reservations by member
Flight::route('GET /reservations/member/@memberId', function($memberId){
    Flight::json( Flight::reservationService()->getByMemberId($memberId) );
});

// POST create reservation
Flight::route('POST /reservations', function(){
    $data = Flight::request()->data->getData();
    Flight::json( Flight::reservationService()->createReservation($data) );
});

// PUT replace reservation
Flight::route('PUT /reservations/@id', function($id){
    $data = Flight::request()->data->getData();
    Flight::json( Flight::reservationService()->update($id, $data) );
});

// PATCH update reservation
Flight::route('PATCH /reservations/@id', function($id){
    $data = Flight::request()->data->getData();
    Flight::json( Flight::reservationService()->update($id, $data) );
});

// DELETE reservation
Flight::route('DELETE /reservations/@id', function($id){
    Flight::json( Flight::reservationService()->delete($id) );
});

?>