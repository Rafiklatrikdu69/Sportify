<?php

class Pronostique{
    private $pronostiqueur_id;
    private $match_prono;
    private $cote_prono;
    private $date_prono;
    private $mise;
    private $status;
    function  __construct($pronostiqueur_id, $match_prono, $cote_prono, $date_prono, $mise, $status) {
        $this->pronostiqueur_id = $pronostiqueur_id;
        $this->match_prono = $match_prono;
        $this->cote_prono = $cote_prono;
        $this->date_prono = $date_prono;
        $this->mise = $mise;
        $this->status = $status;
    }
    
    public function getId(){
        return $this->pronostiqueur_id;
    }
    public function setPronostiqueur_id($pronostiqueur_id){
        $this->pronostiqueur_id=$pronostiqueur_id;
    }
    public function getMatch(){
        return $this->match_prono;
    }   
    public function setMatch($match_prono){
        $this->match_prono= $match_prono;
    }
    public function getCote(){
        return $this->cote_prono;
    }
    public function setCote($cote_prono){
        $this->cote_prono= $cote_prono;
    }
    public function getDate(){
        return $this->date_prono;
    }
    public function setDate($date_prono){
        $this->date_prono= $date_prono;
    }
    public function getMise(){
        return $this->mise;
    }
    public function setMise($mise){
        $this->mise= $mise;
    }
    public function getStatus(){
        return $this->status;
    }
    public function setStatus($status){
        $this->status= $status;
    }
    
}