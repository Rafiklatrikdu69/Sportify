<?php


class VerifSession{
    public function __construct(){
        if(empty($_SESSION['nom'])){
            Redirect::redirect("/public/connexion");
        }
    }
}