<?php

class JsonControllerItem{
    public function ajout() {
        
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            echo "quoicoubeh";
            $data = file_get_contents("php://input");
            $prono = json_decode($data, true);
            echo $prono['item_id'] ;
            
            if(!is_null((new ItemsDAO())->get($prono['item_id']))){
                echo "item existe";
                if(is_null((new ItemsDAO())->selectItemIventaire($prono['item_id']))){
                    echo "item existe";
                    if((new UtilisateurDAO())->getPointUser($_SESSION['nom'])>=$prono['points']){
                        echo "points suffisants";
                        (new ItemsDAO())->insertInventaire(  (new UtilisateurDAO())->getUserId($_SESSION['nom']) ,$prono['item_id']);
                        (new ItemsDAO())->updatePrix($prono['points'],(new UtilisateurDAO())->getUserId($_SESSION['nom']));
                    }
                }
            }
            // (new UtilisateurDAO())->deleteUtilisateurByID($prono['id']);
        }
    }
}