<?php

require_once 'DAO.php';

class EvenementDAO extends DAO{
        public function get($id){
            $sql = "SELECT * FROM Evenement WHERE id = :id";
            $params = array(":id" => $id);
            $sth = $this->queryRow($sql, $params);
            $row = $sth->fetch(PDO::FETCH_ASSOC);
            if ($row == false) {
                return null;
            }
            return $row;
        }
    
        public function getAll(){
            $sql = "SELECT * FROM `EVENEMENT`";

            $sth = $this->queryAll($sql);
            $tab = [];
            foreach($sth as $event){
                $evenement = new Evenement($event[0],$event[1],$event[2],$event[3],$event[4],$event[5],$event[6],$event[7]);
              
                $tab[] = $evenement;
            }
            return $tab;
        }
    
        public function insertEvenement($data){
            $sql = "INSERT INTO Evenement (id, idMatch, idUtilisateur, score1, score2, points) VALUES (:id, :idMatch, :idUtilisateur, :score1, :score2, :points)";
            $sth = $this->insert($sql);
            return $sth;
        }
    
        public function updateEvenement($data){
            $sql = "UPDATE Evenement SET idMatch = :idMatch, idUtilisateur = :idUtilisateur, score1 = :score1, score2 = :score2, points = :points WHERE id = :id";
            $sth = $this->insert($sql);
            return $sth;
        }
    
        /*
        public function deleteEvenement($id){
            $sql = "DELETE FROM Evenement WHERE id = :id";
            $params = array(":id" => $id);
            $sth = $this->delete($sql);
            return $sth->rowCount();
        }
        */

    
    
        
}
