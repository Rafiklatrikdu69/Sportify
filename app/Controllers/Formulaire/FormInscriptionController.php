<?php


class FormInscriptionController extends DefaultFormController{
    public function verification(){
        ob_start();
        if(!empty($_POST['username'])&& !empty($_POST['email']) && !empty($_POST['password'])&&$_SERVER['REQUEST_METHOD'] === 'POST'){
            
            $nom =   Validate::html($_POST['username']);
            $email =  Validate::html($_POST['email']);
            $mdp =  Validate::html($_POST['password']);
            $emailProtect =     filter_var($email,FILTER_SANITIZE_EMAIL);
            if(filter_var($emailProtect,FILTER_VALIDATE_EMAIL)){
            echo $nom . $emailProtect . $mdp;
            $pass_protect = password_hash($mdp, PASSWORD_DEFAULT);
           
            $select =  (new UtilisateurDAO())->selectInscription($nom,$pass_protect,$emailProtect);
            if(!$select){
                $utilisateur = new Utilisateur(0,$nom,$emailProtect,$pass_protect,100,0,0,0);
                (new UtilisateurDAO())->insertUtilisateur($utilisateur);
                echo "insert reussi !";
                
            }
            Redirect::redirect('/public/connexion');
        }
          
        }else{
            Redirect::redirect('/public/inscription');
        }
        ob_end_clean();
    }
}