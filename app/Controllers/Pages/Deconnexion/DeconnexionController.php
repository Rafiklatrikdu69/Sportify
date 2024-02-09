<?php

class DeconnexionController extends Controllers{
    public function index(){
    (new DestroySession());
    
    }
}