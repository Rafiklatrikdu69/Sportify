<?php

require '../vendor/Autoloader.php';


$route = new Route();


$request = $_SERVER['REQUEST_URI'];

//var_dump($request);
switch ($request) {
    
    case '/public/':
        $route->get('/public/',[new HomeController(),'index']);
    break;

    case '/public/connexion':       
      $route->get('/public/connexion',[new ConnexionController(),'index']);

    break;

    case '/public/verification-connexion': 
        $route->get('/public/verification-connexion',[new ConnexionController(),'verifFormulaire']);
    break;

    case '/public/inscription':       
         $route->get('/public/inscription',[new InscriptionControllers(),'index']);
         
    break;

    case '/public/boutique':
        $route->get('/public/boutique',[new StoreController(),'index']);
    break;
    case '/public/pronostique':
        $route->get('/public/pronostique',[new PronoController(),'index']);
    break;


    default:
 
    // $route->get($request,[new InscriptionControllers(),'index']);
         

    break;

    // case '/public/boutique':
    // $route->get('/public/boutique',[new BaseController(),'boutique']);
    // break;
                
}

$route->resolve($_SERVER['REQUEST_URI'],$_SERVER['REQUEST_METHOD']);
            
?>