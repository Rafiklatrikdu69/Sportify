<?php

class AdministrationController {
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
        "posts"=>(new ActuDAO())->getAll(),
        "equipe"=>(new EquipeDAO())->getAllEquipes(),
        "cat"=>(new CategorieDAO())->getAllCategorie()]
       );
    }

    public function show(){
       
        $var = "test";
        json_encode($var,true);
        echo   json_encode(["cle"=>(new UtilisateurDAO())->getStatutByName($_SESSION['nom'])],true);
        
    }
    public function insert(){
        (new EquipeDAO())->insertEquipe($_POST['equipe']);
        Redirect::redirect('/public/administration');
    }
    public function insertCat(){
        (new CategorieDAO())->insertCategorie($_POST['cat']);
        Redirect::redirect('/public/administration');
    }
    public function get(){
        echo json_encode(["1"=>(new EquipeDAO())->getAllEquipes()]);
    }
}