<?php

class FormConnexionController extends DefaultFormController{
    public function verification(){
        if(!empty($_POST['nom'])&& !empty($_POST['mdp'])){
            
            $nom =   Validate::html($_POST['nom']);
            $mdp =  Validate::html($_POST['mdp']);
            $select =  (new UtilisateurDAO())->select($nom,$mdp);
            // if(is_null($select)){
            //     Redirect::redirect('/public/connexion');
            // }
        }else{
            Redirect::redirect('/public/connexion');
        }
    }
}