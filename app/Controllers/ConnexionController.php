<?php


class ConnexionController  extends Controllers{

    public function index(){
        View::View('connexion',['name'=>'']);
  }

  public function verifFormulaire(){
        echo "test a effectuer";
  }

}