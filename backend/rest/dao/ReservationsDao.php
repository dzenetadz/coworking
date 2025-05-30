<?php
require_once __DIR__ . '/BaseDao.php';

class ReservationsDao extends BaseDao {
    public function __construct() {
        parent::__construct("Reservations"); // table name for reservations
    }
    
    public function getByMemberId($customer_id) {
        $stmt = $this->connection->prepare("SELECT * FROM " . $this->table . " WHERE customer_id = :customer_id");
        $stmt->bindParam(':customer_id', $customer_id);
        $stmt->execute();
        return $stmt->fetchAll();
    }
}
?>