<?php

class JsonControllerActu{
    echo "Entrée dans JsonControllerActu";
    public function ajoutActu() {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            echo "Entrée dans if";
            $data = file_get_contents("php://input");
            $actu_info = json_decode($data, true);
            echo $actu_info['titre'];

            $user_id = (new UtilisateurDAO())->getUtilisateurByName($_SESSION['nom']);
            $actu = new Actu($user_id,$_SESSION['nom'],$actu_info['titre'],$actu_info['contenu'],0);
            (new ActuDAO())->insertActu($actu['auteur_id'],$actu['post_titre'],$actu['post_contenu'],$actu['nb_like']);
            echo "Actualité ajoutée avec succès";
        }
    }
}
