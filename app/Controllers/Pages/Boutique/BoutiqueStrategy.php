<?php
class BoutiqueStrategy{
    private $strategy;
    public function __construct(DefautBoutiqueStrategy $strategy) {
        $this->strategy = $strategy;
    }
    public function index() {
        return $this->strategy->index();
    }
    public function show() {
        return $this->strategy->show();
    }
}