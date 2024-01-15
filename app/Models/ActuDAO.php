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

    public function getPostsByCurrPost($currPostValue){
        $sql = "SELECT * FROM `POST` WHERE POST_ID = :currPostValue OR PARENT_POST = :currPostValue";
        $params = array(":currPostValue" => $currPostValue);
        $sth = $this->queryAll($sql, $params);
        $tab = [];
        foreach($sth as $post){
            $post = new Actu($post[0],$post[1],$post[2],$post[3],$post[4],$post[5]);
            $tab[] = $post;
        }
        return $tab;
    }



    public function getAll(){
        $sql = "SELECT * FROM `POST` WHERE PARENT_POST = 0 ORDER BY POST_ID DESC";
        $sth = $this->queryAll($sql);
        $tab = [];
        foreach($sth as $post){
            $post = new Actu($post[0],$post[1],$post[2],$post[3],$post[4],$post[5]);
            $tab[] = $post;
        }
        return $tab;
    }

    public function insertActu($idUtilisateur,$nomUtilisateur,$titre,$contenu,$nbLike){
        $sql = "INSERT INTO `POST` (AUTEUR_ID,AUTEUR_NOM,NOM_TOPIC,DESCRIPTION_POST,NB_LIKE) VALUES (:idUtilisateur,:nomUtilisateur,:titre,:contenu,:nbLike)";
        $params = array(":idUtilisateur" => $idUtilisateur,":nomUtilisateur" => $nomUtilisateur, ":titre" => $titre,":contenu" => $contenu,":nbLike" => $nbLike);
        $sth = $this->insert($sql, $params);
        return $sth;
    }

    public function insertCom($idUtilisateur,$nomUtilisateur,$titre,$contenu,$nbLike,$parentPost){
        $sql = "INSERT INTO `POST` (AUTEUR_ID,AUTEUR_NOM,NOM_TOPIC,DESCRIPTION_POST,NB_LIKE,PARENT_POST) VALUES (:idUtilisateur,:nomUtilisateur,:titre,:contenu,:nbLike,:parentPost)";
        $params = array(":idUtilisateur" => $idUtilisateur,":nomUtilisateur" => $nomUtilisateur, ":titre" => $titre,":contenu" => $contenu,":nbLike" => $nbLike,":parentPost" => $parentPost);
        $sth = $this->insert($sql, $params);
        return $sth;
    }

    public function updateActu($data){
        $sql = "UPDATE `POST` SET AUTEUR_ID = :idUtilisateur, NOM_TOPIC = :titre, DESCRIPTION_POST = :contenu, NB_LIKE = :nbLike WHERE POST_ID = :id";
        $sth = $this->insert($sql);
        return $sth;
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

    public function updateLike($id,$nbLike){
        $sql = "UPDATE `POST` SET NB_LIKE = :nbLike WHERE POST_ID = :id";
        $params = array(":id" => $id,":nbLike" => $nbLike);
        $sth = $this->insert($sql, $params);
        return $sth;
    }

    public function addLike($id){
        $sql = "UPDATE `POST` SET NB_LIKE = NB_LIKE + 1 WHERE POST_ID = :id";
        $params = array(":id" => $id);
        $sth = $this->insert($sql, $params);
        return $sth;
    }
}