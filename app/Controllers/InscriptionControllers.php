<?php

class InscriptionControllers extends Controllers{
    public function index(){
        View::View('inscription',['name'=>'']);
    }


    public function verifFormulaire(){
        echo "test a effectuer";
    }

}