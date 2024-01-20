<?php
 class Equipe {
    private $id;
    private $equipe;
 
    public function __construct($id, $equipe) {
        $this->id = $id;
        $this->equipe = $equipe;
     
    }
    public function getId(){
        return $this->id;
    }
    public function getEquipe(){
        return $this->equipe;
    }
 
 }