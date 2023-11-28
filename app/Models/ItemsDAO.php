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
        
        public function purchaseItem($itemId, $userId) {
            // Vérifier si l'article existe et que l'utilisateur a assez de points pour l'acheter
            $sql = "SELECT * FROM ITEMS WHERE ITEM_ID = :itemId";
            $params = array(":itemId" => $itemId);
            $sth = $this->queryRow($sql, $params);
            $item = $sth->fetch(PDO::FETCH_ASSOC);
        
            $sql = "SELECT * FROM UTILISATEUR WHERE UTILISATEUR_ID = :userId";
            $params = array(":userId" => $userId);
            $sth = $this->queryRow($sql, $params);
            $user = $sth->fetch(PDO::FETCH_ASSOC);
        
            if (!$item || !$user || $user['POINT_ACTUEL'] < $item['PRIX']) {
                return false; // L'article n'existe pas ou l'utilisateur n'a pas assez de points
            }
        
            // Effectuer l'achat en ajoutant l'article à l'inventaire de l'utilisateur et déduire les points
            $sql = "INSERT INTO INVENTAIRE (UTILISATEUR_ID, ITEM_ID) VALUES (:userId, :itemId)";
            $params = array(":userId" => $userId, ":itemId" => $itemId);
            $sth = $this->insert($sql, $params);
        
            if ($sth->rowCount() == 0) {
                return false; // Erreur lors de l'ajout à l'inventaire
            }
        
            $newPoints = $user['POINT_ACTUEL'] - $item['PRIX'];
            $sql = "UPDATE UTILISATEUR SET POINT_ACTUEL = :newPoints WHERE UTILISATEUR_ID = :userId";
            $params = array(":newPoints" => $newPoints, ":userId" => $userId);
            $sth = $this->update($sql, $params);
        
            if ($sth->rowCount() == 0) {
                return false; // Erreur lors de la mise à jour des points
            }
        
            return true; // Achat effectué avec succès
        }
        
}