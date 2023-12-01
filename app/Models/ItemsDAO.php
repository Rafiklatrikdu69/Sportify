<?php

require 'DAO.php';
require 'UtilisateurDAO.php';
require 'Singleton.php';
require 'Items.php';
// require '../../vendor/Autoloader.php';
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
              
                $tab[] = $items; // Ajout de l'objet Items dans le tableau
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


        public function handlePurchaseRequest() {
            if ($_SERVER['REQUEST_METHOD'] === 'POST') {
                // Récupérer les données envoyées depuis le frontend
                $data = json_decode(file_get_contents('php://input'), true);
    
                if (isset($data['itemId'])) {
                    $itemId = $data['itemId'];
    
                    // Appeler la fonction purchaseItem avec les données reçues
                    $result = $this->purchaseItem($itemId);
    

                    // à revoir
                    // Retourner le résultat (true ou false) sous forme JSON
                    echo json_encode(['success' => $result]);
                    exit;
                } else {
                    // Retourner une erreur si les données ne sont pas complètes
                    echo json_encode(['error' => 'Missing itemId']);
                    exit;
                }
            }
        }

        
        public function purchaseItem($itemId) {
            // Récupérer l'ID de l'utilisateur connecté
            $userId = 1;

            // Récupérer les points de l'utilisateur
            $sqlUser = "SELECT * FROM UTILISATEUR WHERE UTILISATEUR_ID = :userId";
            $paramsUser = array(":userId" => $userId);
            $user = $this->queryRow($sqlUser, $paramsUser);
            
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
    
            // Inseré mais return false ???
            // if (!$sthInsert || $sthInsert->rowCount() == 0) {
            //     return false; // Erreur lors de l'ajout de l'article à l'inventaire
            // }
    
            // Mettre à jour le nombre de points de l'utilisateur après l'achat
            $sqlUpdate = "UPDATE UTILISATEUR SET POINT_ACTUEL = POINT_ACTUEL - :itemPrice WHERE UTILISATEUR_ID = :userId";
            $paramsUpdate = array(":itemPrice" => $item['PRIX'], ":userId" => $userId);
            $sthUpdate = $this->insert($sqlUpdate, $paramsUpdate);

            // mis à jour mais return false ???
            // if (!$sthUpdate || $sthUpdate->rowCount() == 0) {
            //     return false; // Erreur lors de la mise à jour des points
            // }
    
            return true; // Achat effectué avec succès

    }
}

$itemsDAO = new ItemsDAO();
$itemsDAO->handlePurchaseRequest();
// (new ItemsDAO())->purchaseItem(1); // Test de la fonction purchaseItem() avec l'ID de l'article à acheter en paramètre