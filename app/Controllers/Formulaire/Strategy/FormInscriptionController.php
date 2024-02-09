<?php


class FormInscriptionController implements DefaultFormController{
    public function index(){        
        if(!empty($_POST['username'])&& !empty($_POST['email']) && !empty($_POST['password'])&&$_SERVER['REQUEST_METHOD'] === 'POST'){
            $nom =   Validate::html($_POST['username']);
            $email =  Validate::html($_POST['email']);
            $mdp =  Validate::html($_POST['password']);
            echo $nom . $email . $mdp;
            $emailProtect =     filter_var($email,FILTER_SANITIZE_EMAIL);
            if(filter_var($emailProtect,FILTER_VALIDATE_EMAIL)){
            echo $nom . $emailProtect . $mdp;
            $pass_protect = password_hash($mdp, PASSWORD_DEFAULT);
           
            $select =  (new UtilisateurDAO())->selectInscription($nom,$pass_protect,$emailProtect);
            if(!$select){
                $utilisateur = new Utilisateur(0,$nom,$emailProtect,$pass_protect,100,0,1,0);
                (new UtilisateurDAO())->insertUtilisateur($utilisateur);
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