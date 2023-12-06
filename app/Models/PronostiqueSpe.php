<?php

class PronostiqueSpe{
    private $cote_prono;
    private $mise;
    private $nom_evenement;
    private $equipe_concernee;
    private $equipe_perdante;
    private $date_evenement;
    function  __construct($cote_prono, $mise, $nom_evenement, $equipe_concernee, $equipe_perdante, $date_evenement) {
        $this->cote_prono = $cote_prono;
        $this->mise = $mise;
        $this->nom_evenement = $nom_evenement;
        $this->equipe_concernee = $equipe_concernee;
        $this->equipe_perdante = $equipe_perdante;
        $this->date_evenement = $date_evenement;
    }

    public function getCote(){
        return $this->cote_prono;
    }
    public function setCote($cote_prono){
        $this->cote_prono= $cote_prono;
    }
    public function getMise(){
        return $this->mise;
    }
    public function setMise($mise){
        $this->mise= $mise;
    }
    public function getNom(){
        return $this->nom_evenement;
    }
    public function setNom($nom_evenement){
        $this->nom_evenement= $nom_evenement;
    }
    public function getEquipeConcernee(){
        return $this->equipe_concernee;
    }
    public function setEquipeConcernee($equipe_concernee){
        $this->equipe_concernee= $equipe_concernee;
    }
    public function getEquipePerdante(){
        return $this->equipe_perdante;
    }
    public function setEquipePerdante($equipe_perdante){
        $this->equipe_perdante= $equipe_perdante;
    }
    public function getDate(){
        return $this->date_evenement;
    }
    public function setDate($date_evenement){
        $this->date_evenement= $date_evenement;
    }

}