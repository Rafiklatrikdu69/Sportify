<?php



class Evenement{
    
    
    private $id;
    private $nom_evenement;
    private $date_evenement;
    private $equipe_domicile;
    private $equipe_exterieur;
    private $cote_domicile;
    private $cote_exterieur;
    private $cat_sport;
    

    
    
    function __construct($id,$nom_evenement,$date_evenement, $equipe_domicile, $equipe_exterieur, $cote_domicile,$cote_exterieur ,$cat_sport) {
        $this->id = $id;
        $this->nom_evenement = $nom_evenement;
        $this->date_evenement = $this->reverseDate($date_evenement);
        $this->equipe_domicile = $equipe_domicile;
        $this->equipe_exterieur = $equipe_exterieur;
        $this->cote_domicile = $cote_domicile;
        $this->cote_exterieur = $cote_exterieur;
        $this->cat_sport = $cat_sport;
    }
    
    function getId() {
        return $this->id;
    }
    function getEquipe_domicile() {
        return $this->equipe_domicile;
    }
    
    function getEquipe_exterieur() {
        return $this->equipe_exterieur;
    }
    
    function getNomEvenement() {
        return $this->nom_evenement;
    }
    
    function getCatSport() {
        return $this->cat_sport;
    }
    
    function getDate_evenement() {
        return $this->date_evenement;
    }
    
    
    function getCote_domicile() {
        return $this->cote_domicile;
    }
    
    
    
    function getCote_exterieur() {
        return $this->cote_exterieur;
    }
    
    private function reverseDate($date){
        $date = explode("-", $date);
        $date = array_reverse($date);
        $date = implode("-", $date);
        return $date;
    }
    
}