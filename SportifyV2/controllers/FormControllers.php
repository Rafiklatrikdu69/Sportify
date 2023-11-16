<?php

class FormControllers{
    
    public function index(){
        
        $this->view('index',['name'=> 'test']);

       
   }
   public function login(){
        $this->view('inscription',['name'=> 'test']);
   }
   public function store(){
    $this->view('store',['name'=> 'test']);
}

   

   protected function view($view,$data =null) {
    
       $viewChemin = "../views/{$view}.php";

       if (file_exists($viewChemin)) {
          echo "Le fichier existe";  
          if(!is_null($data)){
           extract($data);//extrait les donnes pour les reutiliser -> utile pour recuperer les donnees
          }
          
           require $viewChemin;
           
            
       } else {
           echo "Le fichier existe pas ";  
           return "La vue '{$view}' n'existe pas.";
       }
   }

   protected function redirect($view) {
    
       header("Location: /{$view}");
   }
}