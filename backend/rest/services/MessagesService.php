<?php
require_once 'BaseService.php';
require_once __DIR__ . '/../dao/MessagesDao.php';

class MessagesService extends BaseService {
    public function __construct() {
        $dao = new MessagesDao();
        parent::__construct($dao);
    }

    /**
     * Fetch all messages for a given customer
     */
    public function getByMemberId($memberId) {
        return $this->dao->getByMemberId($memberId);
    }
}