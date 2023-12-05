<?php
class ActuController extends Controllers{
    public  function index(){
        (new VerifSession());
        View::View('actu',["tabUsers"=>(new UtilisateurDAO())->getAllUsers(),
                    'tabPosts'=>(new ActuDAO())->getAll(),]);


    }
    
  
}