<?php

class FormConnexionController implements DefaultFormController{
    public function index(){
        ob_start();
        if(!empty($_POST['nom'])&& !empty($_POST['mdp'])&&$_SERVER['REQUEST_METHOD'] === 'POST'){
            echo "osfd";
            $nom =   Validate::html($_POST['nom']);
            $mdp =  Validate::html($_POST['mdp']);
           
            echo $mdp;
           
            $select =  (new UtilisateurDAO())->select($nom,$mdp);
            
            if($select){
                $_SESSION['nom'] = $nom;
                Redirect::redirect('/public/pronostique');
            }
            else{
                Redirect::redirect('/public/connexion');
            }
        }
        else{
            Redirect::redirect('/public/connexion');
        }
        ob_end_clean();
    }
}