<?php

class Strategy{   
    private $strategy;
    
    public function __construct(DefaultFormController $strategy) {
        $this->strategy = $strategy;
    }
    
    public function indexView() {
        return $this->strategy->index();
    }
    
    
}