<?php

class AdministrationController extends Controllers{
    public function index(){
        View::view("admin",[
            "users"=>(new UtilisateurDAO())->getAllUsers(),
        "evenement"=>(new EvenementDAO())->getAll() ,
        "prono"=>(new PronostiqueDAO())->getAll(),
        "posts"=>(new ActuDAO())->getAll()]
       );
    }
}