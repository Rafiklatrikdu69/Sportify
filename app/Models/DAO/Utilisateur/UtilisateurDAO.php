<?php



// include '../vendor/Autoloader.php';
// seulement l'id et le mail sont unique, deux personnes peuvent avoir le meme nom, prenom, mot de passe
class UtilisateurDAO extends DAO{
    
    public function getAllUsers(){
        $sql = "SELECT * FROM `UTILISATEUR` WHERE STATUS = 1";
        $res = $this->queryAll($sql);
        $tab = [];
    
        foreach($res as $user){
           $us = new Utilisateur($user[0],$user[1],$user[2],$user[3],$user[4],$user[5],$user[6],$user[7]);
           $tab[]  = $us;
        }
  
        return $tab;
    }
    public function getStatutByName($name){
        $sql = "SELECT * FROM `UTILISATEUR`  WHERE PSEUDO = :name AND STATUS = 0";
       $sth =  $this->queryRow($sql,array(
            "name"=>$name
        ));
       
        return $sth;
} 

    
    public function select($nom, $mdp) {
        $sql = "SELECT * FROM `UTILISATEUR` WHERE PSEUDO LIKE :pseudo";
        $res = $this->queryRow($sql, array('pseudo' => $nom));
        
        $bool = FALSE;
        
        if ($res) {
            
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
    //a changer 
    public function selectInscription($nom,$mdp,$email){
        $sql = "SELECT * from `UTILISATEUR` where PSEUDO like :pseudo  or EMAIL like :mail";
        $res=  $this->queryRow($sql,array('pseudo'=>$nom,
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
        
        if (isset($nom)) {
            
            $sql = "SELECT UTILISATEUR_ID FROM `UTILISATEUR` WHERE PSEUDO = :pseudo";
            $result = $this->queryRow($sql, array('pseudo' => $nom));
            
            
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
    
    
    
    public function updatePoint($id, $pointActuel, $mise) {
        $sql = "UPDATE `UTILISATEUR` SET POINT_ACTUEL = POINT_ACTUEL - :mise WHERE UTILISATEUR_ID = :id";
        $this->update($sql, array(
            "id" => $id,
            "mise" => $mise
        ));
    }
    
    
    public function getPointUser($nom){
        $sql = "SELECT POINT_ACTUEL FROM `UTILISATEUR` WHERE PSEUDO = :pseudo";
        $result = $this->queryRow($sql, array('pseudo' => $nom));
        if ($result) {
            return $result['POINT_ACTUEL'];
        } else {
            echo "Erreur : Impossible de récupérer le nombre de points de l'utilisateur depuis la base de données.";
            return null;
        }
    }

    public function deleteUtilisateurByID($id){

        $sql = "DELETE FROM `UTILISATEUR` WHERE UTILISATEUR_ID = :id";
        $this->delete($sql, array('id' => $id));

        $sql = "DELETE FROM `INVENTAIRE` WHERE UTILISATEUR_ID = :id";
        $this->delete($sql, array('id' => $id));


        $sql = "DELETE FROM `PRONOSTIC` WHERE PRONOSTIQUEUR_ID = :id";

        $this->delete($sql, array('id' => $id));
    }
    
    
    // echo "quoicoubeh". (new UtilisateurDAO())->getUtilisateurByName()."lksjdaskd";

    public function getUserId($nom){
        $sql = "SELECT UTILISATEUR_ID FROM `UTILISATEUR` WHERE PSEUDO = :pseudo";
        $result = $this->queryRow($sql, array('pseudo' => $nom));
        if ($result) {
            return $result['UTILISATEUR_ID'];
        } else {
            echo "Erreur : Impossible de récupérer l'ID de l'utilisateur depuis la base de données.";
            return null;
        }
    }

    public function setLastConnection($name){
        $sql = "UPDATE `UTILISATEUR` SET LAST_CONNECTION = CAST(NOW() AS DATE) WHERE PSEUDO = :pseudo";
        $this->update($sql, array(
            "pseudo" => $name
        ));
    }

    public function addPoint($name){
        $sql = "UPDATE `UTILISATEUR` SET POINT_ACTUEL = POINT_ACTUEL + 10 WHERE UTILISATEUR_ID = :id";
        $this->update($sql, array(
            "id" => $this->getUserId($name)
        ));
    }
    public function updatePointJeu($points,$name){
        $sql = "UPDATE `UTILISATEUR` SET POINT_ACTUEL = POINT_ACTUEL + :points WHERE UTILISATEUR_ID = :id";
        $this->update($sql, array(
            "points"=>$points,
            "id" => $this->getUserId($name)
        ));
    }
    public function getScoreClassementJeu(){
        $tab = [];
        try {
            $sql = "SELECT SCORE_CLASSEMENT, PSEUDO FROM UTILISATEUR ORDER BY SCORE_CLASSEMENT DESC LIMIT 10";
            $score = $this->queryAll($sql);
            foreach ($score as $user) {
                $infos = []; 
                $infos[] = $user[0]; 
                $infos[] = $user[1];
                $tab[] = $infos;  
            }
            return $tab;
        } catch (PDOException $e) {
            error_log("Erreur de base de données: " . $e->getMessage());
            return ;
        }
        return $tab; 
    }

    public function updateScoreJeu($score, $id){
        $sql = "UPDATE `UTILISATEUR` SET SCORE_CLASSEMENT = :score WHERE UTILISATEUR_ID = :id";
        $this->update($sql, array(
            "score"=>$score,
            "id" => $this->getUserId($id)
        ));
    }

    public function getMeilleurScore(){
        $sql = "SELECT MAX(SCORE_CLASSEMENT) AS MAX_SCORE FROM `UTILISATEUR`";
        $result = $this->queryRow($sql, null);
        if ($result) {
            return $result['MAX_SCORE'];
        } else {
            echo "Erreur : Impossible de récupérer le nombre de points de l'utilisateur depuis la base de données.";
            return null;
        }
    }
    public function getMeilleurScoreUser($nom){
        $sql = "SELECT SCORE_CLASSEMENT FROM `UTILISATEUR` WHERE PSEUDO = :pseudo";
        $result = $this->queryRow($sql, array('pseudo' => $nom));
        if ($result) {
            return $result['SCORE_CLASSEMENT'];
        } else {
            echo "Erreur : Impossible de récupérer le nombre de points de l'utilisateur depuis la base de données.";
            return null;
        }
    }
    public function getLastConnection($name){
        $sql = "SELECT LAST_CONNECTION FROM `UTILISATEUR` WHERE PSEUDO = :pseudo";
        $result = $this->queryRow($sql, array('pseudo' => $name));
        if ($result) {
            if($result['LAST_CONNECTION'] != date("Y-m-d")){
                (new UtilisateurDAO())->addPoint($name);
                (new UtilisateurDAO())->setLastConnection($name);
                return "Vous avez gagné 10 points pour votre connexion quotidienne !";
            }
            else{
                return date("Y-m-d");
            }
        }
        else {
            echo "Erreur : Impossible de récupérer la dernière connexion de l'utilisateur depuis la base de données.";
            return "";
        }
    }

    public function getTop10(){
        $sql = "SELECT * FROM `UTILISATEUR` WHERE STATUS = 1 ORDER BY POINT_CLASSEMENT DESC LIMIT 10";
        $res = $this->queryAll($sql);
        $tab = [];
    
        foreach($res as $user){
           $us = new Utilisateur($user[0],$user[1],$user[2],$user[3],$user[4],$user[5],$user[6],$user[7]);
           $tab[]  = $us;
        }
  
        return $tab;
    }

    public function getClassement($name) {
        $sql = "SELECT PSEUDO, POINT_CLASSEMENT FROM `UTILISATEUR` ORDER BY POINT_CLASSEMENT DESC";
        
        $results = $this->queryAll($sql);
        
        if ($results !== false) {
            $classement = 1;
            foreach ($results as $user) {
                if ($user['PSEUDO'] === $name) {
                    return $classement;
                }
                $classement++;
            }
            // Si le nom d'utilisateur n'est pas trouvé dans les résultats
            echo "Erreur : Nom d'utilisateur non trouvé dans le classement.";
            return null;
        } else {
            echo "Erreur : Impossible de récupérer le classement depuis la base de données.";
            return null;
        }
    }

    public function getPdp($name){
        $sql = "SELECT PDP_SRC FROM `UTILISATEUR` WHERE PSEUDO = :pseudo";
        $result = $this->queryRow($sql, array('pseudo' => $name));
        if ($result) {
            return $result['PDP_SRC'];
        } else {
            echo "Erreur : Impossible de récupérer l'ID de l'utilisateur depuis la base de données.";
            return null;
        }
    }

    public function getBadge($name){
        $sql = "SELECT BADGE_SRC FROM `UTILISATEUR` WHERE PSEUDO = :pseudo";
        $result = $this->queryRow($sql, array('pseudo' => $name));
        if ($result) {
            return $result['BADGE_SRC'];
        } else {
            echo "Erreur : Impossible de récupérer l'ID de l'utilisateur depuis la base de données.";
            return null;
        }
    }

    public function getEcusson($name){
        $sql = "SELECT ECUSSON_SRC FROM `UTILISATEUR` WHERE PSEUDO = :pseudo";
        $result = $this->queryRow($sql, array('pseudo' => $name));
        if ($result) {
            return $result['ECUSSON_SRC'];
        } else {
            echo "Erreur : Impossible de récupérer l'ID de l'utilisateur depuis la base de données.";
            return null;
        }
    }

    public function updatePdpByName($name, $pdp) {
        $sql = "UPDATE `UTILISATEUR` SET PDP_SRC = :pdp WHERE PSEUDO = :pseudo";
        $this->update($sql, array(
            "pseudo" => $name,
            "pdp" => $pdp
        ));
    }

    public function updateBadgeByName($name, $bad) {
        $sql = "UPDATE `UTILISATEUR` SET BADGE_SRC = :badge WHERE PSEUDO = :pseudo";
        $this->update($sql, array(
            "pseudo" => $name,
            "badge" => $bad
        ));
    }

    public function updateEcussonByName($name, $ecu) {
        $sql = "UPDATE `UTILISATEUR` SET ECUSSON_SRC = :ecusson WHERE PSEUDO = :pseudo";
        $this->update($sql, array(
            "pseudo" => $name,
            "ecusson" => $ecu
        ));
    }


    public function getPronoWin($name){
        $sql = "SELECT COUNT(PRONOSTIC.COTE_PRONO) AS NB_PRONO
                FROM 
                    PRONOSTIC 
                JOIN 
                    UTILISATEUR ON UTILISATEUR.UTILISATEUR_ID = PRONOSTIC.PRONOSTIQUEUR_ID 
                JOIN 
                    EVENEMENT ON PRONOSTIC.MATCH_PRONO = EVENEMENT.EVENEMENT_ID 
                WHERE 
                    UTILISATEUR.PSEUDO = :nom AND PRONOSTIC.STATUS = 1";
        $stmt = $this->queryAll($sql, array("nom" => $name));
        $result = $stmt[0];
        if ($result) {
            return $result['NB_PRONO'];
        } else {
            echo "Erreur : Impossible de récupérer le nombre de pronostics gagnés depuis la base de données.";
            return null;
        }
    }
    
    public function getPdpById($userId){
        $sql = "SELECT PDP_SRC FROM `UTILISATEUR` WHERE UTILISATEUR_ID = :userId";
        $params = [':userId' => $userId];
        $result = $this->queryRow($sql, $params);
    
        if ($result) {
            return $result['PDP_SRC'];
        } else {
            // Si aucun résultat n'est trouvé, vous pouvez renvoyer une valeur par défaut
            // ou gérer l'absence de PDP comme vous le souhaitez
            return 'chemin/vers/votre/image/par/defaut.jpg';
        }
    }
}
