<?php


class DestroySession{
    public function __construct(){
        if(!empty($_SESSION['nom'])){
            session_destroy();
            Redirect::redirect("/public/connexion");
        }
    }
}