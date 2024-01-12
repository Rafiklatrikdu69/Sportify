<?php
class ActuController extends Controllers{
    public function index() {
        (new VerifSession());
        // Vérifier si la variable de session 'currpost' est définie
        if (isset($_SESSION['currpost']) && !empty($_SESSION['currpost']) && $_SESSION['currpost'] != 0) {
            // Si 'currpost' est défini, récupérer les données en fonction de sa valeur
            $currPostValue = $_SESSION['currpost'];
    
            View::View('actu', [
                "tabUsers" => (new UtilisateurDAO())->getAllUsers(),
                'tabPosts' => (new ActuDAO())->getPostsByCurrPost($currPostValue),
                'tabClassement' => (new UtilisateurDAO())->getTop10(),
                "pointsUser"=>( new UtilisateurDAO())->getPointUser($_SESSION['nom'])
            ]);
        } else {
            // Si 'currpost' n'est pas défini, récupérer toutes les publications normalement
            View::View('actu', [
                "tabUsers" => (new UtilisateurDAO())->getAllUsers(),
                'tabPosts' => (new ActuDAO())->getAll(),
                'tabClassement' => (new UtilisateurDAO())->getTop10(),
                "pointsUser"=>( new UtilisateurDAO())->getPointUser($_SESSION['nom'])
            ]);
            $_SESSION['currpost'] = 0;
        }
    }
    
    
  
}