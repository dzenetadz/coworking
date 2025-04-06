<?php
require_once 'BaseDao.php';

class PlansDao extends BaseDao {
    public function __construct() {
        parent::__construct("Plans");
    }

    public function getByPlanTitle($plan_title) {
        $stmt = $this->connection->prepare("SELECT * FROM " . $this->table . " WHERE plan_title = :plan_title");
        $stmt->bindParam(':plan_title', $plan_title);
        $stmt->execute();
        return $stmt->fetch();
    }
}
?>