<?php

class AdministrationController extends Controllers{
    public function index(){
        (new VerifSession());
        if(!(new UtilisateurDAO())->getStatutByName($_SESSION['nom'])){
            ob_start();
            Redirect::redirect('/public/pronostique');
            ob_clean();
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