<?php

// GET all services
Flight::route('GET /services', function(){
    Flight::json( Flight::serviceService()->getAll() );
});

// GET single service
Flight::route('GET /services/@id', function($id){
    Flight::json( Flight::serviceService()->getById($id) );
});

// POST create service
Flight::route('POST /services', function(){
    $data = Flight::request()->data->getData();
    Flight::json( Flight::serviceService()->createService($data) );
});

// PUT replace service
Flight::route('PUT /services/@id', function($id){
    $data = Flight::request()->data->getData();
    Flight::json( Flight::serviceService()->update($id, $data) );
});

// PATCH update service
Flight::route('PATCH /services/@id', function($id){
    $data = Flight::request()->data->getData();
    Flight::json( Flight::serviceService()->update($id, $data) );
});

// DELETE service
Flight::route('DELETE /services/@id', function($id){
    Flight::json( Flight::serviceService()->delete($id) );
});

?>