<?php
class JsonStrategyProno{
    private $strategy;
    public function __construct(DefaultJsonController $strategy) {
        $this->strategy = $strategy;
    }
    
    public function index() {
        return $this->strategy->index();
    }
    public function insert(){
        return $this->strategy->insert();
    }

}