<?php



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
        //Faire gagner
        $sql = "UPDATE `PRONOSTIC` SET `STATUS` = 1 WHERE `PRONOSTIC`.`MATCH_PRONO` = :match_id AND `PRONOSTIC`.`COTE_PRONO` BETWEEN :cote - 0.01 AND :cote + 0.01";
        $this->insert($sql, array(
            "match_id" => $match_id,
            "cote" => $cote
        ));
        //Faire perdre
        $sql = "UPDATE `PRONOSTIC` SET `STATUS` = -1 WHERE `PRONOSTIC`.`MATCH_PRONO` = :match_id AND `PRONOSTIC`.`COTE_PRONO` NOT BETWEEN :cote - 0.01 AND :cote + 0.01";
        $this->insert($sql, array(
            "match_id" => $match_id,
            "cote" => $cote
        ));
        //Ajouter Pts gagnant (solde actuel)
        $sql = "UPDATE `UTILISATEUR` SET `POINT_ACTUEL` = `POINT_ACTUEL` + `MISE` * `COTE_PRONO` WHERE `UTILISATEUR`.`UTILISATEUR_ID` = (SELECT `PRONOSTIQUEUR_ID` FROM `PRONOSTIC` WHERE `MATCH_PRONO` = :match_id AND `COTE_PRONO` BETWEEN :cote - 0.01 AND :cote + 0.01)";
        $this->insert($sql, array(
            "match_id" => $match_id,
            "cote" => $cote
        ));
        //Ajouter Pts gagnant (classement total)
        $sql = "UPDATE `UTILISATEUR` SET `POINT_ACTUEL` = `POINT_CLASSEMENT` + `MISE` * `COTE_PRONO` WHERE `UTILISATEUR`.`UTILISATEUR_ID` = (SELECT `PRONOSTIQUEUR_ID` FROM `PRONOSTIC` WHERE `MATCH_PRONO` = :match_id AND `COTE_PRONO` BETWEEN :cote - 0.01 AND :cote + 0.01)";
        $this->insert($sql, array(
            "match_id" => $match_id,
            "cote" => $cote
        ));
    }

    
    
    
}


