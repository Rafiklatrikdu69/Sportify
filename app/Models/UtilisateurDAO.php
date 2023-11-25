<?php


class UtilisateurDAO extends DAO{
    public function select($nom, $mdp) {
        $sql = "SELECT * FROM `UTILISATEUR` WHERE PSEUDO LIKE :pseudo";
        $res = $this->queryRow($sql, array('pseudo' => $nom));
    
        $bool = FALSE;
    
        if ($res) {
            // Mot de passe stocké dans la base de données
            $motDePasseBD = $res['MOT_DE_PASSE'];
            echo "BD : ". $motDePasseBD."<br>";
            echo "mdp : ".$mdp;
           
            if (password_verify($mdp, $motDePasseBD)) {
            
                echo "Utilisateur présent";
                $bool = TRUE;
            } else {
               
                echo "Mot de passe incorrect";
            }
        } else {
           
            echo "Utilisateur inconnu";
        }
    
        return $bool;
    }
    
    public function insertUtilisateur($utilisateur) {
        $sql = "INSERT INTO `UTILISATEUR` (`PSEUDO`, `EMAIL`, `MOT_DE_PASSE`, `POINT_ACTUEL`, `POINT_CLASSEMENT`, `STATUS`, `SCORE_JEU`) VALUES 
        (:pseudo, :mail, :mdp, :point_actuel, :points_classement, :statut, :score_jeu)";
        $this->insert($sql,array(
            
            "pseudo" => $utilisateur->getPseudo(),
            "mail" => $utilisateur->getEmail(),
            "mdp" => $utilisateur->getMotDePasse(),
            "point_actuel" => $utilisateur->getPointActuel(),
            "points_classement" => $utilisateur->getPointClassement(),
            "statut" => $utilisateur->getStatus(),
            "score_jeu" => $utilisateur->getScoreJeu()
        ));
        
        
    }
    public function selectInscription($nom,$mdp,$email){
        $sql = "SELECT * from `UTILISATEUR` where PSEUDO like :pseudo or MOT_DE_PASSE like :mdp or EMAIL like :mail";
        $res=  $this->queryRow($sql,array('pseudo'=>$nom,
        'mdp'=>$mdp,
    'mail'=>$email));
        $bool = FALSE;
        if($res){   
            echo "utilisateur present";
            
            $bool = TRUE;
        }
        else{
           
            
            echo "Utilisateur inconnue";
            
        }
        return $bool;
        
    }

    public function getUtilisateurByName($nom){
        // Vérifiez si $_SESSION['nom'] est défini
        if (isset($nom)) {
            // Utilisez $nom pour récupérer l'ID de l'utilisateur depuis votre base de données
            // Notez que vous devez ajuster cette partie en fonction de la structure de votre base de données
            $sql = "SELECT UTILISATEUR_ID FROM `UTILISATEUR` WHERE PSEUDO = :pseudo";
            $result = $this->queryRow($sql, array('pseudo' => $nom));
    
            // Vérifiez si la requête a réussi et renvoyez l'ID de l'utilisateur
            if ($result) {
                return $result['UTILISATEUR_ID'];
            } else {
                echo "Erreur : Impossible de récupérer l'ID de l'utilisateur depuis la base de données.";
                return null;
            }
        } else {
            echo "Erreur : La variable de session 'nom' n'est pas définie.";
            return null;
        }
    }
    
   
    }
  
   
    // echo "quoicoubeh". (new UtilisateurDAO())->getUtilisateurByName()."lksjdaskd";
    
