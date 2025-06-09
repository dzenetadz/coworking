<?php
require_once __DIR__ . '/BaseService.php';
require_once __DIR__ . '/../dao/ReservationsDao.php';

class ReservationsService extends BaseService {
    public function __construct() {
        $dao = new ReservationsDao();
        parent::__construct($dao);
    }

    /**
     * Create a reservation, but first validate:
     *  - start_time < end_time
     *  - reservation dates are in the future
     *  - no conflicting reservation for the same resource
     */
    public function createReservation(array $data) {
        $now = new DateTime();
        $start = new DateTime($data['start_date']);
        $end   = new DateTime($data['end_date']);

        if ($start >= $end) {
            throw new Exception('Reservation end time must be after start time.');
        }
        if ($start < $now) {
            throw new Exception('Reservation must start in the future.');
        }

        // check for conflicts
        $conflicts = $this->dao->getByResourceAndRange(
            $data['plan_id'],
            $data['start_date'],
            $data['end_date']
        );
       if (!empty($conflicts)) {
    Flight::json($conflicts, 409);
    exit;
}


        return $this->create($data);
    }

    /**
     * Fetch all reservations for a given member
     */
    public function getByMemberId($memberId) {
        return $this->dao->getByMemberId($memberId);
    }
}