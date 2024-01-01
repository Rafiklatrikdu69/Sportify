<?php

class JsonControllerJeu{
    function __construct() {
        
    }
    public  function  index(){
        $userPoint = new UtilisateurDAO();
        $data = [1=>$userPoint->getPointUser($_SESSION['nom'])];
        $tab =  json_encode($data, true);
        echo $tab;
        //file_put_contents('test.json', $data);
    }
    
    public function point(){
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $userPoint = new UtilisateurDAO(); 
            $data = file_get_contents("php://input");
            var_dump($data);
            $tab =  json_decode($data, true);
            echo "le score: ".$tab['score'];
            $userPoint->updatePointJeu($tab['score'],$_SESSION['nom']);
        }
    }
}