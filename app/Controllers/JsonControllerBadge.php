<?php

class JsonControllerBadge{
    public function updateBadge(){
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $data = file_get_contents("php://input");
            $badge_info = json_decode($data, true);
            $nom = $_SESSION['nom'];
            $badge = $badge_info['badge'];
            (new UtilisateurDAO())->updateBadgeByName($nom, $badge);
            echo "Pdp modifié avec succès";
        }
    }
}