<?php

class JsonControllerCom{
    public function ajoutCom() {
        ob_start();
        if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_SESSION['currpost']) && $_SESSION['currpost'] !== 0 && !empty($_SESSION['currpost'])) {
            echo "Entrée dans if ";
   
            $user_id = (new UtilisateurDAO())->getUtilisateurByName($_SESSION['nom']);
            $actu = new Actu(0,$user_id,$_SESSION['nom'],$_POST['titre'],$_POST['contenu'],0);
            (new ActuDAO())->insertCom($actu->getAuteurId(),$actu->getAuteurName(),$actu->getTitre(),$actu->getContenu(),$actu->getNbLike(),$_SESSION['currpost']);
            echo $actu->getAuteurId();
            echo "Actualité ajoutée avec succès";
            Redirect::redirect('actu');
        }
        ob_end_clean();
    }
    
}
