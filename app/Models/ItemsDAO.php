<?php

// require '../../vendor/Autoloader.php';
require 'DAO.php';
require 'UtilisateurDAO.php';
require 'Singleton.php';
// require '../../config/Config.php';

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
        
        public function purchaseItem($itemId) {
            $userId = null;
            if (isset($_SESSION['nom'])) {
                $nom = $_SESSION['nom'];
                $userId = (new UtilisateurDAO())->getUtilisateurByName($nom);
            }
        
            if ($userId) {
                // Récupérer les détails de l'utilisateur
                $sqlUser = "SELECT * FROM UTILISATEUR WHERE UTILISATEUR_ID = :userId";
                $paramsUser = array(":userId" => $userId);
                $user = $this->queryRow($sqlUser, $paramsUser);
        
                // Vérifier si l'utilisateur existe
                if (!$user) {
                    return false; // Utilisateur introuvable
                }
        
                // Vérifier si l'article existe et que l'utilisateur a assez de points pour l'acheter
                $sqlItem = "SELECT * FROM ITEMS WHERE ITEM_ID = :itemId";
                $paramsItem = array(":itemId" => $itemId);
                $item = $this->queryRow($sqlItem, $paramsItem);
        
                if (!$item || $user['POINT_ACTUEL'] < $item['PRIX']) {
                    return false; // L'article n'existe pas ou l'utilisateur n'a pas assez de points
                }
        
                // Effectuer l'achat en ajoutant l'article à l'inventaire de l'utilisateur et déduire les points
                $sqlInsert = "INSERT INTO INVENTAIRE (UTILISATEUR_ID, ITEM_ID) VALUES (:userId, :itemId)";
                $paramsInsert = array(":userId" => $userId, ":itemId" => $itemId);
                $sthInsert = $this->insert($sqlInsert, $paramsInsert);
        
                if (!$sthInsert || $sthInsert->rowCount() == 0) {
                    return false; // Erreur lors de l'ajout à l'inventaire
                }
        
                // Mettre à jour le nombre de points de l'utilisateur après l'achat
                $newPoints = $user['POINT_ACTUEL'] - $item['PRIX'];
                $sqlUpdate = "UPDATE UTILISATEUR SET POINT_ACTUEL = :newPoints WHERE UTILISATEUR_ID = :userId";
                $paramsUpdate = array(":newPoints" => $newPoints, ":userId" => $userId);
                $sthUpdate = $this->update($sqlUpdate, $paramsUpdate);
        
                if (!$sthUpdate || $sthUpdate->rowCount() == 0) {
                    return false; // Erreur lors de la mise à jour des points
                }
        
                return true; // Achat effectué avec succès
            } else {
                return false; // Utilisateur non trouvé ou non connecté
            }
        }
        
        
}

(new ItemsDAO())->purchaseItem(1); // Test de la fonction purchaseItem() avec l'ID de l'article à acheter en paramètre