<?php



class PronostiqueDAO extends DAO{
    
    public function getAll(){
        $sql = "SELECT * FROM `PRONOSTIC`";
        $stmt = $this->queryAll($sql);
        
        // foreach($stmt as $p){
            
            // }
            //echo "le tableau";
            //var_dump($stmt);
            return $stmt;
        }
        
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
            echo "match :".$match_id." cote" .$cote;
            $sql = "UPDATE `PRONOSTIC` SET `STATUS` = 1 WHERE MATCH_PRONO = :match_id AND COTE_PRONO = :cote";
            $this->update($sql, array(
                "match_id" => $match_id,
                "cote" => $cote
            ));
            
            $sql = "UPDATE `PRONOSTIC` SET `STATUS` = -1 WHERE MATCH_PRONO = :match_id AND COTE_PRONO != :cote";
            $this->update($sql, array(
                "match_id" => $match_id,
                "cote" => $cote
            ));
            
            $sql = "UPDATE `UTILISATEUR` 
            INNER JOIN `PRONOSTIC` ON `UTILISATEUR`.`UTILISATEUR_ID` = `PRONOSTIC`.`PRONOSTIQUEUR_ID`
            SET `POINT_ACTUEL` = `POINT_ACTUEL` + `MISE` * `COTE_PRONO`
            WHERE `PRONOSTIC`.`MATCH_PRONO` = :match_id";
            
            $this->update($sql, array(
                "match_id" => $match_id
            ));
            
            $sql = "UPDATE `UTILISATEUR` 
            INNER JOIN `PRONOSTIC` ON `UTILISATEUR`.`UTILISATEUR_ID` = `PRONOSTIC`.`PRONOSTIQUEUR_ID`
            SET `POINT_CLASSEMENT` = `POINT_CLASSEMENT` + `MISE` * `COTE_PRONO`
            WHERE `PRONOSTIC`.`MATCH_PRONO` = :match_id";
            
            $this->update($sql, array(
                "match_id" => $match_id
            ));
            $sql = "DELETE FROM `PRONOSTIC` WHERE `MATCH_PRONO` = :match_id";
            $this->delete($sql, array("match_id" => $match_id)); 
            // deleteProno($match_id);
            $sql = "DELETE FROM `EVENEMENT` WHERE `EVENEMENT_ID` = :match_id";
            $this->delete($sql, array("match_id" => $match_id)); 
            
        }
        
    }
    
    
    
    
    
    
    
    
    
    
    
    
