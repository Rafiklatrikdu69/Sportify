<?php

//require 'DAO.php';


class ActuDAO extends DAO{

    // public function get($id){
    //     $sql = "SELECT * FROM Actu WHERE id = :id";
    //     $params = array(":id" => $id);
    //     $sth = $this->queryRow($sql, $params);y
    //     $row = $sth->fetch(PDO::FETCH_ASSOC);
    //     if ($row == false) {
    //         return null;
    //     }
    //     return $row;
    // }



    public function getAll(){
        $sql = "SELECT * FROM `POST`";
        $sth = $this->queryAll($sql);
        $tab = [];
        foreach($sth as $post){
            $post = new Actu($post[0],$post[1],$post[2],$post[3],$post[4],$post[5]);
            
            $tab[] = $post;
        }
        return $tab;
    }

    public function insertActu($auteurId,$titre,$contenu,$nbLike){
        $sql = "INSERT INTO `POST` (`AUTEUR_ID`, `NOM_TOPIC`, `DESCRIPTION_POST`, `NB_LIKE`) VALUES (:idUtilisateur, :titre, :contenu, :nbLike)";
        $params = array(
            ":idUtilisateur" => $auteurId,
            ":titre" => $titre,
            ":contenu" => $contenu,
            ":nbLike" => $nbLike
        );
        $sth = $this->insert($sql, $params);
        return $sth;
    }

    public function updateActu($data){
        $sql = "UPDATE `POST` SET AUTEUR_ID = :idUtilisateur, NOM_TOPIC = :titre, DESCRIPTION_POST = :contenu, NB_LIKE = :nbLike WHERE POST_ID = :id";
        $sth = $this->insert($sql);
        return $sth;
    }

    public function deleteActu($id){
        $sql = "DELETE FROM `POST` WHERE id = :id";
        $params = array(":id" => $id);
        $sth = $this->delete($sql);
        return $sth->rowCount();
    }

    public function getNbLike($id){
        $sql = "SELECT NB_LIKE FROM `POST` WHERE id = :id";
        $params = array(":id" => $id);
        $sth = $this->queryRow($sql, $params);
        $row = $sth->fetch(PDO::FETCH_ASSOC);
        if ($row == false) {
            return null;
        }
        return $row;
    }

    public function addLike($id){
        $sql = "UPDATE `POST` SET NB_LIKE = NB_LIKE + 1 WHERE id = :id";
        $params = array(":id" => $id);
        $sth = $this->insert($sql);
        return $sth;
    }

    public function removeLike($id){
        $sql = "UPDATE `POST` SET NB_LIKE = NB_LIKE - 1 WHERE id = :id";
        $params = array(":id" => $id);
        $sth = $this->insert($sql);
        return $sth;
    }
}