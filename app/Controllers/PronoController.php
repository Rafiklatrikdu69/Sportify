<?php

class PronoController extends Controllers{
    public  function index(){
     
       (new VerifSession());
        View::View('pronostique',["tableau"=>(new EvenementDAO())->getAll()]);
       
    }
    
  
}