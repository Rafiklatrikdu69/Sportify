<?php

class Items{

    // variables (attributs)
    private $item_id;
    private $item_name;
    private $item_type;
    private $item_description;
    private $item_price;
    private $item_color;

    // constructeur
    function __construct($item_id,$item_name,$item_type,$item_description,$item_price,$item_color) {
        $this->item_id = $item_id;
        $this->item_name = $item_name;
        $this->item_type = $item_type;
        $this->item_description = $item_description;
        $this->item_price = $item_price;
        $this->item_color = $item_color;
    }

    // geters
    function getId() {
        return $this->item_id;
    }

    function getName() {
        return $this->item_name;
    }

    function getType() {
        return $this->item_type;
    }

    function getDescription() {
        return $this->item_description;
    }

    function getPrice() {
        return $this->item_price;
    }

    function getColor() {
        return $this->item_color;
    }

    function toString(){
        return 
        '<div class="card">'. 
        '<img src="images/logo.png">'.
        '<h1>'.$this->item_name.'</h1>'.
        '<p class="price">'.$this->item_price.' points</p>'.
        '<p>'.$this->item_description.'</p>'.
        '<p><button id="buy'.$this->item_id.'" onclick="showConfirmation('.$this->item_id.', \''.$this->item_name.'\')">Acheter</button></p>'. 
        '</div>';
    }


    public function purchaseItem($itemId, $userId) {
        // Effectuer des opérations pour vérifier le solde, déduire les points, ajouter l'article à l'inventaire, etc.
        // Return true si l'achat est réussi, sinon false
        $sql = "SELECT * FROM `ITEMS` WHERE `ITEM_ID` = :item_id";
        $params = array(":item_id" => $itemId);
        $sth = $this->queryRow($sql, $params);
        $row = $sth->fetch(PDO::FETCH_ASSOC);
        if ($row == false) {
            return false;
        }
        $item = new Items($row["ITEM_ID"], $row["ITEM_NAME"], $row["ITEM_TYPE"], $row["ITEM_DESCRIPTION"], $row["ITEM_PRICE"], $row["ITEM_COLOR"]);
        $sql = "SELECT * FROM `UTILISATEUR` WHERE `UTILISATEUR_ID` = :user_id";
        $params = array(":user_id" => $userId);
        $sth = $this->queryRow($sql, $params);
        $row = $sth->fetch(PDO::FETCH_ASSOC);
        if ($row == false) {
            return false;
        }
        $user = new Utilisateur($row["UTILISATEUR_ID"], $row["UTILISATEUR_NOM"], $row["UTILISATEUR_PRENOM"], $row["UTILISATEUR_EMAIL"], $row["UTILISATEUR_MDP"], $row["UTILISATEUR_POINT_ACTUEL"], $row["UTILISATEUR_POINT_CLASSEMENT"], $row["UTILISATEUR_BADGE"], $row["UTILISATEUR_EQUIPE_FAVORITE"]);
        if ($user->getPointActuel() < $item->getPrice()) {
            return false;
        }
        $sql = "INSERT INTO `ACHAT` (`ITEM_ID`, `UTILISATEUR_ID`) VALUES (:item_id, :user_id)";
        $params = array(":item_id" => $itemId, ":user_id" => $userId);
        $sth = $this->insert($sql, $params);
        if ($sth->rowCount() == 0) {
            return false;
        }
        $sql = "UPDATE `UTILISATEUR` SET `UTILISATEUR_POINT_ACTUEL` = `UTILISATEUR_POINT_ACTUEL` - :price WHERE `UTILISATEUR_ID` = :user_id";
        $params = array(":price" => $item->getPrice(), ":user_id" => $userId);
        $sth = $this->insert($sql, $params);
        if ($sth->rowCount() == 0) {
            return false;
        }
        return true;
    }

}

