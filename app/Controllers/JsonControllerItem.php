<?php

class JsonControllerItem{
    public function ajout() {
        
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            //echo "quoicoubeh";
            $data = file_get_contents("php://input");
            $item = json_decode($data, true);
            //echo $item['item_id'] ;
            
            if(!is_null((new ItemsDAO())->get($item['item_id']))){
                echo "item existe ";
                if(is_null((new ItemsDAO())->selectItemIventaire($item['item_id']))){
                    echo "item existe pas dans inventaire, donc on peut l'ajouter ";
                    if((new UtilisateurDAO())->getPointUser($_SESSION['nom'])>=$item['points']){
                        echo "points suffisants";
                        (new ItemsDAO())->insertInventaire(  (new UtilisateurDAO())->getUserId($_SESSION['nom']) ,$item['item_id']);
                        (new ItemsDAO())->updatePrix($item['points'],(new UtilisateurDAO())->getUserId($_SESSION['nom']));
                    }else{
                        echo "points insuffisants";
                    }
                }else{
                    echo "item existe dans inventaire";
                }
            }
            // (new UtilisateurDAO())->deleteUtilisateurByID($item['id']);
        }
    }
}