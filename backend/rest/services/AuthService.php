<?php
require_once 'BaseService.php';
require_once __DIR__ . '/../dao/AuthDao.php';
use Firebase\JWT\JWT;
use Firebase\JWT\Key;


class AuthService extends BaseService {
   private $auth_dao;
   public function __construct() {
       $this->auth_dao = new AuthDao();
       parent::__construct(new AuthDao);
   }


   public function get_user_by_email($email){
       return $this->auth_dao->get_user_by_email($email);
   }


   public function register($entity) {  
    error_log(" DEBUG register payload: " . print_r($entity, true));

       if (empty($entity['customer_email']) || empty($entity['customer_password'])) {
           return ['success' => false, 'error' => 'Email and password are required.'];
       }


       $email_exists = $this->auth_dao->get_user_by_email($entity['customer_email']);
       if($email_exists){
           return ['success' => false, 'error' => 'Email already registered.'];
       }


       $entity['customer_password'] = password_hash($entity['customer_password'], PASSWORD_BCRYPT);


       $entity = parent::add($entity);


       unset($entity['customer_password']);


       return ['success' => true, 'data' => $entity];             
   }


   public function login($entity) {  
       if (empty($entity['customer_email']) || empty($entity['customer_password'])) {
           return ['success' => false, 'error' => 'Email and password are required.'];
       }


       $user = $this->auth_dao->get_user_by_email($entity['customer_email']);
       if(!$user){
           return ['success' => false, 'error' => 'Invalid username or password.'];
       }


       if(!$user || !password_verify($entity['customer_password'], $user['customer_password']))
           return ['success' => false, 'error' => 'Invalid username or password.'];


       unset($user['customer_password']);
      
       $jwt_payload = [
           'user' => $user,
           'iat' => time(),
           'is_admin'  => $user['is_admin'],
           // If this parameter is not set, JWT will be valid for life. This is not a good approach
           'exp' => time() + (60 * 60 * 24) // valid for day
       ];


       $token = JWT::encode(
           $jwt_payload,
           Config::JWT_SECRET(),
           'HS256'
       );


       return ['success' => true, 'data' => array_merge($user, ['token' => $token])];             
   }
}
