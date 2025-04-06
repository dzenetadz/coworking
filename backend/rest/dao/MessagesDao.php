<?php
require_once 'BaseDao.php';

class MessagesDao extends BaseDao {
    public function __construct() {
        parent::__construct("Messages");
    }

    public function getByMemberId($customer_id) {
        $stmt = $this->connection->prepare("
            SELECT * 
            FROM {$this->table} 
            WHERE customer_id = :customer_id
        ");
        $stmt->bindParam(':customer_id', $customer_id, PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->fetchAll();
    }
}