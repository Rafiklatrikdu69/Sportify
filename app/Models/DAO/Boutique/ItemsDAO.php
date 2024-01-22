<?php



class ItemsDAO extends DAO{
    
    public function get($id){
        $sql = "SELECT * FROM Items WHERE id = :id";
        $params = array(":id" => $id);
        $sth = $this->queryRow($sql, $params);
        
        
        return $sth;
        
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
    
    public function getOwnedItems($pseudo){
        $sql = "SELECT * FROM `ITEMS` WHERE ITEM_ID IN (SELECT ITEM_ID FROM INVENTAIRE WHERE UTILISATEUR_ID = (SELECT UTILISATEUR_ID FROM UTILISATEUR WHERE PSEUDO = :pseudo))";
        $params = array(":pseudo" => $pseudo);
        $sth = $this->queryAll($sql, $params);
        
        $tab = [];
        foreach($sth as $item){
            // Créer un objet Items à partir des résultats
            $items = new Items($item[0],$item[1],$item[2],$item[3],$item[4],$item[5]);
            
            $tab[] = $items; // Ajout de l'objet Items dans le tableau
        }
        return $tab;
    }

    public function getItemsNotOwned($pseudo){
        $sql = "SELECT * FROM `ITEMS` WHERE ITEM_ID NOT IN (SELECT ITEM_ID FROM INVENTAIRE WHERE UTILISATEUR_ID = (SELECT UTILISATEUR_ID FROM UTILISATEUR WHERE PSEUDO = :pseudo))";
        $params = array(":pseudo" => $pseudo);
        $sth = $this->queryAll($sql, $params);
        
        $tab = [];
        foreach($sth as $item){
            // Créer un objet Items à partir des résultats
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
    
    public function selectItemIventaire($id, $pseudo){
        $sql = "SELECT * FROM `INVENTAIRE` WHERE ITEM_ID = :id AND UTILISATEUR_ID = (SELECT UTILISATEUR_ID FROM UTILISATEUR WHERE PSEUDO = :pseudo)";
        $params = array(":id" => $id, ":pseudo" => $pseudo);
        $sth = $this->queryRow($sql, $params);
        
        if($sth){
            return $sth;
        }
        else{
            return null;
        }
        
        
    }
    public function insertInventaire($idInvent,$idItem){
        $sqlInsert = "INSERT INTO `INVENTAIRE` (UTILISATEUR_ID, ITEM_ID) VALUES (:userId, :itemId)";
        $params = array("userId" => $idInvent,
        "itemId"=>$idItem);
        $sth = $this->queryRow($sqlInsert, $params);
        
    }
    
    public function updatePrix($prixItem,$userId){
        $sqlUpdate = "UPDATE UTILISATEUR SET POINT_ACTUEL = POINT_ACTUEL - :itemPrice WHERE UTILISATEUR_ID = :userId";
        $paramsUpdate = array(":itemPrice" => $prixItem, ":userId" => $userId);
        $sth = $this->queryRow($sqlUpdate, $paramsUpdate);
        
    }

    public function getFilteredResults($params) {

     
        $sql = "SELECT * FROM `ITEMS` WHERE 1=1";

        $params = [];

        if (!empty($couleur)) {
            $sql .= " AND couleur = :couleur";
            $params[':couleur'] = $couleur;
        }

        if (!empty($prixMax)) {
            $sql .= " AND prix <= :prixMax";
            $params[':prixMax'] = $prixMax;
        }

   
        $result = $this->queryAll($sql, $params);
        $tab = [];

        foreach ($result as $item) {
            $items = new Items($item[0], $item[1], $item[2], $item[3], $item[4], $item[5]);
            $tab[] = $items; // Ajout de l'objet Items dans le tableau
        }
    }
    
    public function getItemsByType($pseudo, $type){
        $sql = "SELECT * FROM `ITEMS` WHERE ITEM_ID IN (SELECT ITEM_ID FROM INVENTAIRE WHERE UTILISATEUR_ID = (SELECT UTILISATEUR_ID FROM UTILISATEUR WHERE PSEUDO = :pseudo)) AND TYPE = :type";
        $params = array(":pseudo" => $pseudo, ":type" => $type);
        $sth = $this->queryAll($sql, $params);
        
        $tab = [];
        foreach($sth as $item){
            // Créer un objet Items à partir des résultats
            $items = new Items($item[0],$item[1],$item[2],$item[3],$item[4],$item[5]);
            
            $tab[] = $items; // Ajout de l'objet Items dans le tableau
        }
        return $tab;
    }
}

