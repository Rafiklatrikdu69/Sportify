<?php

class EquipeDAO extends DAO{
    public function getAllEquipes(){
        $equipe = [];
        $sql = "SELECT * FROM Equipe";
        $res = $this->queryAll($sql);

        foreach($res as $element){
            $equipe[] = new Equipe($element[0],$element[1],$element[2]);
        }
        return $equipe;
    }
    public function insertEquipe($equipe,$sport){
        $req="INSERT INTO Equipe (equipe,sport) VALUES (:equipe,:sport);" ;
            $this->insert($req,array("equipe"=>$equipe,
            "sport"=>$sport));
    }
}