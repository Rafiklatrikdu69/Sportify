<?php

class Categorie{
    private $id;
    private $cat;
    public function __construct($id,$cat) {
        $this->id = $id;
        $this->cat = $cat;
    }
    public function getId(){
        return $this->id;
    }
    public function getCat(){
        return $this->cat;
    }
}