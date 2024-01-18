<?php

class InscriptionControllers   implements DefaultAuthStrategy{
    public function index(){
        View::View('inscription',['name'=>'']);
    }



}