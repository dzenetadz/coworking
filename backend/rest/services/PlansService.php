<?php
require_once __DIR__ . '/BaseService.php';
require_once __DIR__ . '/../dao/PlansDao.php';

class PlansService extends BaseService {
    public function __construct() {
        $dao = new PlansDao();
        parent::__construct($dao);
    }

    /**
     * Business rule: every plan must have a non‐empty name and positive price
     */
    public function createPlan(array $data) {
        if (empty($data['plan_title'])) {
            throw new Exception('Plan name is required.');
        }
        if (!isset($data['plan_price']) || $data['plan_price'] <= 0) {
            throw new Exception('Plan price must be a positive number.');
        }
        return $this->create($data);
    }

    /**
     * Override update to enforce the same rules on PUT/PATCH:
     */
    public function update($id, array $data) {
        if (array_key_exists('plan_title', $data) && empty($data['plan_title'])) {
            throw new Exception('Plan name cannot be empty.');
        }
        if (array_key_exists('plan_price', $data) && $data['plan_price'] <= 0) {
            throw new Exception('Plan price must be a positive number.');
        }
        return parent::update($id, $data);
    }
}