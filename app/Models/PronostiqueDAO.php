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
    
    public function selectMisePronoById($prono){
        $bool = null;
        $sql ="SELECT POINT_ACTUEL FROM `UTILISATEUR` WHERE :id = UTILISATEUR_ID";
        $res = $this->queryRow($sql,array("id"=>$prono["pronostiqueur_id"]));
        if($res){
            $bool = $res;
        }
        return $bool;
        
    }

    public function makeWin($match_id, $cote) {
        $sql = "UPDATE `PRONOSTIC` SET `STATUS` = 1 WHERE `PRONOSTIC`.`MATCH_PRONO` = :match_id AND `PRONOSTIC`.`COTE_PRONO` = :cote";
        $this->insert($sql, array(
            "match_id" => $match_id,
            "cote" => $cote
        ));
        $sql = "UPDATE `PRONOSTIC` SET `STATUS` = -1 WHERE `PRONOSTIC`.`MATCH_PRONO` = :match_id AND `PRONOSTIC`.`COTE_PRONO` != :cote";
        $this->insert($sql, array(
            "match_id" => $match_id,
            "cote" => $cote
        ));
    }

    
    
    public function verificationProno(){ 
        
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
                // echo  $prono['pronostiqueur_id'];
                
                $resultat = "La mise : " . $prono['mise'] . " Match prono : " . $prono['match_prono'];
                
                // echo $resultat;
                $res = (new PronostiqueDAO())->selectMisePronoById($prono);
                if( !is_null($res)){ 
                    //echo "point actuels  :" .$res[0];
                    if($res[0]>=$prono['mise']){ 
                        if( (new PronostiqueDAO())->selectIDPronostiqueur($prono)==FALSE ) {
                            (new PronostiqueDAO())->insertPronostique($prono);
                            (new UtilisateurDAO())->updatePoint($prono['pronostiqueur_id'],$res[0],$prono['mise']);
                        }else{
                            echo true;
                        }
                    }else{ 
                        echo "point";
                    }
                }
            } else {
                echo "Erreur : Impossible de récupérer l'ID du pronostiqueur depuis la session.";
            }
        }       
    }
}


(new PronostiqueDAO())->verificationProno();