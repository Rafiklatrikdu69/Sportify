<?php

require '../../vendor/Autoloader.php';
require 'DAO.php';
require 'UtilisateurDAO.php';
require 'Singleton.php';
require '../../config/Config.php';
class PronostiqueDAO extends DAO{
    
    public function insertPronostique($prono) {
        $sql = "INSERT INTO `PRONOSTIC` (`PRONOSTIQUEUR_ID`, `MATCH_PRONO`, `COTE_PRONO`, `DATE_PRONO`, `MISE`, `STATUS`)
        VALUES (:pronostiqueur_id, :match_prono, :cote_prono, :date_prono, :mise, :statu)";
        
        $this->insert($sql, array(
            "pronostiqueur_id" => $prono["pronostiqueur_id"],
            "match_prono" => $prono["match_prono"],
            "cote_prono" => $prono["cote_prono"],
            "date_prono" => $prono["date_prono"],
            "mise" => $prono["mise"],
            "statu" => $prono["status"] 
        ));
        
        
        
    }
    
    public function selectIDPronostiqueur($pronoID){
        $bool = FALSE;
        $sql ="SELECT PRONOSTIQUEUR_ID,MATCH_PRONO FROM `PRONOSTIC` WHERE :id_prono = PRONOSTIQUEUR_ID and :match_prono = MATCH_PRONO ";
        $res = $this->queryRow($sql,array("id_prono"=>$pronoID["pronostiqueur_id"],
                                "match_prono"=>$pronoID['match_prono']));
        if($res){
            $bool = TRUE;
        }
        return $bool;
        
    }
    
    
    
    
    
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    session_start();
    
    
    $pronostiqueur_id = null;
    if (isset($_SESSION['nom'])) {
        $nom = $_SESSION['nom'];
      
        $pronostiqueur_id = (new UtilisateurDAO())->getUtilisateurByName($nom);
    }
    
    
    if ($pronostiqueur_id !== null) {
        $data = file_get_contents("php://input");
        $prono = json_decode($data, true);
        
     
        $prono['pronostiqueur_id'] = $pronostiqueur_id;
       echo  $prono['pronostiqueur_id'];
        
        $resultat = "La mise : " . $prono['mise'] . " Match prono : " . $prono['match_prono'];

       // echo $resultat;
        if( (new PronostiqueDAO())->selectIDPronostiqueur($prono)==FALSE ) {
            (new PronostiqueDAO())->insertPronostique($prono);
        }else{
            echo "Vous avez deja pronostiquer sur ce match !";
        }
        
    } else {
        
        echo "Erreur : Impossible de récupérer l'ID du pronostiqueur depuis la session.";
    }


    
    
}



