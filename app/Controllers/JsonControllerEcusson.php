<?php

class JsonControllerEcusson{
    public function updateEcusson(){
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $data = file_get_contents("php://input");
            $ecu_info = json_decode($data, true);
            $nom = $_SESSION['nom'];
            $ecu = $ecu_info['ecu'];
            (new UtilisateurDAO())->updateEcussonByName($nom, $ecu);
            echo "Pdp modifié avec succès";
        }
    }
}