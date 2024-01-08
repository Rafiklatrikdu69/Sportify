<?php

class JsonControllerPdp{
    public function updatePdp(){
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $data = file_get_contents("php://input");
            $pdp_info = json_decode($data, true);
            $nom = $_SESSION['nom'];
            $pdp = $pdp_info['pdp'];
            (new UtilisateurDAO())->updatePdpByName($nom, $pdp);
            echo "Pdp modifié avec succès";
        }
    }
}