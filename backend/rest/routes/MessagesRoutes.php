<?php

// GET all messages
Flight::route('GET /messages', function(){
    Flight::json( Flight::messageService()->getAll() );
});

// GET single message
Flight::route('GET /messages/@id', function($id){
 //   Flight::auth_middleware()->authorizeAdmin();
    Flight::json( Flight::messageService()->getById($id) );
});

// GET messages by member
Flight::route('GET /messages/member/@memberId', function($memberId){
    //Flight::auth_middleware()->authorizeAdmin();
    Flight::json( Flight::messageService()->getByMemberId($memberId) );
});

// POST create message
Flight::route('POST /messages', function(){
    $data = Flight::request()->data->getData();
    Flight::json( Flight::messageService()->create($data) );
});

// PUT replace message
Flight::route('PUT /messages/@id', function($id){
  //  Flight::auth_middleware()->authorizeAdmin();
    $data = Flight::request()->data->getData();
    Flight::json( Flight::messageService()->update($id, $data) );
});

// PATCH update message
Flight::route('PATCH /messages/@id', function($id){
 //   Flight::auth_middleware()->authorizeAdmin();
    $data = Flight::request()->data->getData();
    Flight::json( Flight::messageService()->update($id, $data) );
});

// DELETE message
Flight::route('DELETE /messages/@id', function($id){
 //   Flight::auth_middleware()->authorizeAdmin();
    Flight::json( Flight::messageService()->delete($id) );
});
?>