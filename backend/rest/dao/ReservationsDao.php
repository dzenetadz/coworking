<?php
require_once __DIR__ . '/BaseDao.php';

class ReservationsDao extends BaseDao
{
    public function __construct()
    {
        parent::__construct("reservations"); // table name
    }

    /**
     * Fetch all reservations for a given member
     */
    public function getByMemberId($customer_id)
    {
        $stmt = $this->connection->prepare(
            "SELECT * FROM {$this->table}
             WHERE customer_id = :customer_id"
        );
        $stmt->bindParam(':customer_id', $customer_id);
        $stmt->execute();
        return $stmt->fetchAll();
    }

    /**
     * Check for any existing reservations on the same resource (plan)
     * whose date ranges overlap [start_date, end_date).
     *
     * @param int $resourceId   plan_id (or resource_id)
     * @param string $startDate    requested start date (YYYY-MM-DD)
     * @param string $endDate      requested end date (YYYY-MM-DD)
     * @return array               list of conflicting rows (empty if none)
     */
    public function getByResourceAndRange($planId, $startDate, $endDate)
    {
        $sql = "
           SELECT *
           FROM reservations
        WHERE plan_id     = :plan_id
        AND start_date <= :end_date
        AND end_date   >= :start_date
        AND NOT (start_date = :end_date AND end_date = :start_date)
        ";
        $stmt = $this->connection->prepare($sql);
        $stmt->bindParam(':plan_id', $planId);
        $stmt->bindParam(':start_date', $startDate);
        $stmt->bindParam(':end_date', $endDate);
        $stmt->execute();
        return $stmt->fetchAll();
    }
}
?>