<?php


class FormInscriptionController extends DefaultFormController{
    public function __construct() {
    
   
    }
    public function verification(){
        $userDAO = new UtilisateurDAO();
        if(!empty($_POST['username'])&& !empty($_POST['email']) && !empty($_POST['password'])&&$_SERVER['REQUEST_METHOD'] === 'POST'){
            $nom =   Validate::html($_POST['username']);
            $email =  Validate::html($_POST['email']);
            $mdp =  Validate::html($_POST['password']);
            $emailProtect =     filter_var($email,FILTER_SANITIZE_EMAIL);
            if(filter_var($emailProtect,FILTER_VALIDATE_EMAIL)){
            $pass_protect = password_hash($mdp, PASSWORD_DEFAULT);
            $select =  $userDAO->selectInscription($nom,$pass_protect,$emailProtect);
            if(!$select){
                $utilisateur = new Utilisateur(0,$nom,$emailProtect,$pass_protect,100,0,1,0);
                $userDAO->insertUtilisateur($utilisateur);
                echo "insert reussi !";
                //Appel script js
                echo "<script>
                    window.location.replace('http://localhost/public/connexion');
                </script>";
 
            }else{
                echo "insert echoué !";
                echo "<script>
                    window.location.replace('http://localhost/public/connexion');
                </script>";
            }
           
           
        }
          
        }
   
     
        
    }
}