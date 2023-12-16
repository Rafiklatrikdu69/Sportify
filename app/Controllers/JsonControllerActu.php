<?php

class JsonControllerActu{
    public function ajoutActu() {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            echo "Entrée dans if ";
            $data = file_get_contents("php://input");
            $actu_info = json_decode($data, true);
            echo $actu_info['titre'];

            $user_id = (new UtilisateurDAO())->getUtilisateurByName($_SESSION['nom']);
            $actu = new Actu($user_id,$_SESSION['nom'],$actu_info['titre'],$actu_info['contenu'],0);
            (new ActuDAO())->insertActu($actu->getAuteurId(),$actu->getAuteurName(),$actu->getTitre(),$actu->getContenu(),$actu->getNbLike());
            echo $actu->getAuteurId();
            echo "Actualité ajoutée avec succès";
        }
    }
}
