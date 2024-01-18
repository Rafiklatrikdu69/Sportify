<?php
class AuthStrategy{
    private $strategy;
    public function __construct(DefaultAuthStrategy $strategy) {
        $this->strategy = $strategy;
    }
    public function index() {
        return $this->strategy->index();
    }
}