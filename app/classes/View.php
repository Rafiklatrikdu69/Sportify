<?php


class View{
   

    static function View($view,$data =null){
        $viewChemin = '../app/Views/'.$view.'.php';
            
        //var_dump($viewChemin);
       if (file_exists($viewChemin)) {
          //echo "Le fichier existe";  
          if(!is_null($data)){
           extract($data);//extrait les donnes pour les reutiliser -> utile pour recuperer les donnees
          }
       //    echo'test';
           require $viewChemin;
           
            
       } else {
           echo "Le fichier existe pas ";  
           echo "La vue '{$view}' n'existe pas.";
       }
    }


    static function redirect($view) {
 
        header("Location: /{$view}");
    }
      
    


                
}