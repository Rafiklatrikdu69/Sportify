<?php

class PronoController extends Controllers{
    public  function index(){
        View::View('pronostique',["tableau"=>(new EvenementDAO())->getAll()]);
    }
    
}