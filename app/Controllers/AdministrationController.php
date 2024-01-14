<?php

class AdministrationController extends Controllers{
    public function index(){
   
        if(!(new UtilisateurDAO())->getStatutByName($_SESSION['nom'])){
            Redirect::redirect('/public/pronostique');
        }
        View::view("admin",[
            "users"=>(new UtilisateurDAO())->getAllUsers(),
    
        "evenement"=>(new EvenementDAO())->getAll() ,
        "prono"=>(new PronostiqueDAO())->getAll(),
        "posts"=>(new ActuDAO())->getAll()]
       );
    }

    public function show(){
        $var = "test";
        json_encode($var,true);
        echo   json_encode(["cle"=>(new UtilisateurDAO())->getStatutByName($_SESSION['nom'])],true);
    }
}