<?php
class CategorieDAO extends DAO{

    public function  getAllCategorie(){
        $cat = [];
        $sql = "SELECT * FROM CATEGORIE";
        $res = $this->queryAll($sql);

        foreach($res as $element){
            $cat[] = new Categorie($element[0],$element[1]);
        }
        return $cat;
    }
  
    public function insertCategorie($cat){
        $req="INSERT INTO CATEGORIE (categorie) VALUES (:categorie);" ;
            $this->insert($req,array("categorie"=>$cat));
    }
}