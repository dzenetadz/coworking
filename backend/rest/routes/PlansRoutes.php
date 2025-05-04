<?php
// GET all plans
Flight::route('GET /plans', function(){
    Flight::json( Flight::planService()->getAll() );
});

// GET single plan
Flight::route('GET /plans/@id', function($id){
    Flight::json( Flight::planService()->getById($id) );
});

// POST (create) plan
Flight::route('POST /plans', function(){
    $data = Flight::request()->data->getData();
    Flight::json( Flight::planService()->createPlan($data) );
});

// PUT (replace) plan
Flight::route('PUT /plans/@id', function($id){
    $data = Flight::request()->data->getData();
    Flight::json( Flight::planService()->update($id, $data) );
});

// PATCH (partial update)
Flight::route('PATCH /plans/@id', function($id){
    $data = Flight::request()->data->getData();
    Flight::json( Flight::planService()->update($id, $data) );
});

// DELETE plan
Flight::route('DELETE /plans/@id', function($id){
    Flight::json( Flight::planService()->delete($id) );
});