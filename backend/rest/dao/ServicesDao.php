<?php
require_once 'BaseDao.php';

class ServicesDao extends BaseDao {
    public function __construct() {
        parent::__construct("Services");
    }
    
    public function getByCategory($category) {
        $stmt = $this->connection->prepare("SELECT * FROM " . $this->table . " WHERE category = :category");
        $stmt->bindParam(':category', $category);
        $stmt->execute();
        return $stmt->fetchAll();
    }
}
?>