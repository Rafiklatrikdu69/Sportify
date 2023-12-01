<?php


class JsonController {
    
    public function supp() {

        if ($_SERVER['REQUEST_METHOD'] === 'POST') {

            $data = file_get_contents("php://input");
            $prono = json_decode($data, true);
            echo $prono['id'] ;
           
           (new UtilisateurDAO())->deleteUtilisateurByID($prono['id']);
        }
    }
}


