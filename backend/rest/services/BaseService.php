<?php
require_once __DIR__ . '/../dao/BaseDao.php';

class BaseService {
    protected $dao;

    public function __construct($dao) {
        $this->dao = $dao;
    }

    public function getAll() {
        return $this->dao->getAll();
    }

    public function add($entity)
    {
        return $this->dao->add($entity);
    }

    public function getById($id) {
        return $this->dao->getById($id);
    }

    public function create(array $data) {
        return $this->dao->insert($data);
    }

    public function update($id, array $data) {
        return $this->dao->update($id, $data);
    }

    public function delete($id) {
        return $this->dao->delete($id);
    }
}