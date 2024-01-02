<?php

class JsonControllerLike{
    public function like(){
        // ajout like
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $data = file_get_contents("php://input");
            $like_info = json_decode($data, true);
            $id = $like_info['id'];
            (new ActuDAO())->addLike($id);
            echo "Like ajouté avec succès";
        }
    }
}