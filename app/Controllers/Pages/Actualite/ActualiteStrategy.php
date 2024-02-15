<?php
class ActualiteStrategy{
    private $strategy;
    public function __construct(DefaultActualiteStrategy $strategy) {
        $this->strategy = $strategy;
    }
    //les methodes 
    public function index() {
        return $this->strategy->index();
    }

    public function sendLikes() {
        return $this->strategy->sendLikes();
    }
    public function ajoutActu() {
        return $this->strategy->ajoutActu();
    }
    public function ajoutCom() {
        return $this->strategy->ajoutCom();
    }
    public function like() {
        return $this->strategy->like();
    }
    public function profil() {
        return $this->strategy->profil();
    }
}