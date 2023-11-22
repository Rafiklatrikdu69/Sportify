<?php

require_once 'DAO.php';

class PronostiqueDAO extends DAO{
    
        public function get($id){
            $sql = "SELECT * FROM pronostique WHERE id = :id";
            $params = array(":id" => $id);
            $sth = $this->queryRow($sql, $params);
            $row = $sth->fetch(PDO::FETCH_ASSOC);
            if ($row == false) {
                return null;
            }
            return $row;
        }
    
        public function getAll(){
            $sql = "SELECT * FROM pronostique";
            $sth = $this->queryAll($sql);
            return $sth;
        }
    
        public function insertPronostique($data){
            $sql = "INSERT INTO pronostique (id, idMatch, idUtilisateur, score1, score2, points) VALUES (:id, :idMatch, :idUtilisateur, :score1, :score2, :points)";
            $sth = $this->insert($sql);
            return $sth;
        }
    
        public function updatePronostique($data){
            $sql = "UPDATE pronostique SET idMatch = :idMatch, idUtilisateur = :idUtilisateur, score1 = :score1, score2 = :score2, points = :points WHERE id = :id";
            $sth = $this->insert($sql);
            return $sth;
        }
    
        public function deletePronostique($id){
            $sql = "DELETE FROM pronostique WHERE id = :id";
            $params = array(":id" => $id);
            $sth = $this->executer($sql, $params);
            return $sth->rowCount();
        }
    
        public function getMatchsPronostiques($idUtilisateur){
            $sql = "SELECT * FROM pronostique WHERE idUtilisateur = :idUtilisateur";
            $params = array(":idUtilisateur" => $idUtilisateur);
            $sth = $this->queryRow($sql, $params);
            $rows = $sth->fetchAll(PDO::FETCH_ASSOC);
            return $rows;
        }
    
        
}
