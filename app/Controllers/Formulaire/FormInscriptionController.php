<?php


class FormInscriptionController extends DefaultFormController{
    public function verification(){
        if(!empty($_POST['username'])&& !empty($_POST['email']) && !empty($_POST['password'])){
            
            $nom =   Validate::html($_POST['username']);
            $email =  Validate::html($_POST['email']);
            $mdp =  Validate::html($_POST['password']);
            echo $nom . $email . $mdp;
            $select =  (new UtilisateurDAO())->selectInscription($nom,$mdp,$email);
            if(!$select){
                $utilisateur = new Utilisateur(0,$nom,$email,$mdp,0,0,0,0);
                (new UtilisateurDAO())->insertUtilisateur($utilisateur);
            }
            echo "insert reussi !";
        }else{
            Redirect::redirect('/public/connexion');
        }
    }
}