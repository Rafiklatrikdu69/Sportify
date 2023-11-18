<?php



class BaseController 
{
    public function login()
    {
        
        $this->view('connexion',['name'=>'']);
       
}
public function index()
{
    
    $this->view('index',['name'=>'']);
   
}
public function boutique(){
    $this->view('boutique',['name'=>'']);
}
public function inscription(){
    $this->view('inscription',[]);
}
protected function view($view,$data =null) {
    
    $viewChemin = '../app/views/'.$view.'.php';
    
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



protected function redirect($view) {
 
    header("Location: /{$view}");
}

}
