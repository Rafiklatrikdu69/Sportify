<?php

require ("../app/vendor/Autoloader.php");


$route = new Route();


$request = $_SERVER['REQUEST_URI'];

//var_dump($request);
switch ($request) {
    
    case '/public/':
        $route->get('/public/',[new BaseController(),'index']);
    break;

    case '/public/connexion':       
     $route->get('/public/connexion',[new BaseController(),'login']);
    break;

    case '/public/inscription':       
        $route->get('/public/inscription',[new BaseController(),'inscription']);
    break;

    case '/public/boutique':
    $route->get('/public/boutique',[new BaseController(),'boutique']);
    break;
                
}

$route->resolve($_SERVER['REQUEST_URI'],$_SERVER['REQUEST_METHOD']);
            
?>