<?php
 class Equipe {
    private $id;
    private $equipe;
    private $sport;
    public function __construct($id, $equipe, $sport) {
        $this->id = $id;
        $this->equipe = $equipe;
        $this->sport = $sport;
    }
    public function getId(){
        return $this->id;
    }
    public function getEquipe(){
        return $this->equipe;
    }
    public function getSport(){
        return $this->sport;
    }
 }