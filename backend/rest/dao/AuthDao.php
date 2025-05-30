<?php
require_once __DIR__ . '/BaseDao.php';


class AuthDao extends BaseDao {
   protected $table_name;


   public function __construct() {
       $this->table_name = "members";
       parent::__construct($this->table_name);
   }


   public function get_user_by_email($email) {
       $query = "SELECT * FROM " . $this->table_name . " WHERE customer_email = :email";
       return $this->query_unique($query, ['email' => $email]);
   }
}
