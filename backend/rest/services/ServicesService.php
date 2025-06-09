<?php
require_once __DIR__ . '/BaseService.php';
require_once __DIR__ . '/../dao/ServicesDao.php';

class ServicesService extends BaseService {
    public function __construct() {
        $dao = new ServicesDao();
        parent::__construct($dao);
    }

    /**
     * Business rule: service must have a title and a positive fee
     */
    public function createService(array $data) {
        if (empty($data['service_title'])) {
            throw new Exception('Service title is required.');
        }
        /* if (!isset($data['fee']) || $data['fee'] < 0) {
            throw new Exception('Service fee must be zero or positive.');
        } */
        return $this->create($data);
    }
}