<?php

class EquipeDAO extends DAO{
    public function getAllEquipes(){
        $equipe = [];
        $sql = "SELECT * FROM EQUIPE";
        $res = $this->queryAll($sql);

        foreach($res as $element){
            $equipe[] = new Equipe($element[0],$element[1]);
        }
        return $equipe;
    }
    public function insertEquipe($equipe){
        $req="INSERT INTO EQUIPE (equipe) VALUES (:equipe);" ;
            $this->insert($req,array("equipe"=>$equipe));
    }
}