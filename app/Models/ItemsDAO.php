<?php


// comme pour les autres DAO, on hérite de la classe DAO

require_once 'DAO.php';

class ItemsDAO extends DAO{
        public function get($id){
            $sql = "SELECT * FROM Items WHERE id = :id";
            $params = array(":id" => $id);
            $sth = $this->queryRow($sql, $params);
            $row = $sth->fetch(PDO::FETCH_ASSOC);
            if ($row == false) {
                return null;
            }
            return $row;
        }
    
        public function getAll(){
            $sql = "SELECT * FROM `ITEMS`";

            $sth = $this->queryAll($sql);
            $tab = [];
            foreach($sth as $item){
                $items = new Items($item[0],$item[1],$item[2],$item[3],$item[4],$item[5]);
              
                $tab[] = $items->toString();
            }
            return $tab;
        }
    
        public function insertItems($data){
            $sql = "INSERT INTO Items (id, name, type, description, price, color) VALUES (:id, :name, :type, :description, :price, :color)";
            $sth = $this->insert($sql);
            return $sth;
        }
    
        public function updateItems($data){
            $sql = "UPDATE Items SET name = :name, type = :type, description = :description, price = :price, color = :color WHERE id = :id";
            $sth = $this->insert($sql);
            return $sth;
        }
    
        /*
        public function deleteItems($id){
            $sql = "DELETE FROM Items WHERE id = :id";
            $params = array(":id" => $id);
            $sth = $this->delete($sql);
            return $sth->rowCount();
        }
        */  
}