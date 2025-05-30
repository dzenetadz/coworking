<?php
require_once __DIR__ . '/BaseService.php';
require_once __DIR__ . '/../dao/UserDao.php';

class UserService extends BaseService {
    public function __construct() {
        $dao = new UserDao();
        parent::__construct($dao);
    }

    /**
     * Business rule: validate email & minimum password length
     */
    public function registerUser(array $data) {
        if (empty($data['email']) || !filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
            throw new Exception('A valid email address is required.');
        }
        if (empty($data['password']) || strlen($data['password']) < 8) {
            throw new Exception('Password must be at least 8 characters long.');
        }

        // hash before storing
        $data['password'] = password_hash($data['password'], PASSWORD_DEFAULT);
        return $this->create($data);
    }
}