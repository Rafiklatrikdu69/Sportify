<?php


require 'vendor/Autoloader.php';

$route = new Router();


$request = $_SERVER['REQUEST_URI'];

switch ($request) {
    case '/':
        $route->get('/',[new FormControllers(),'index']);
        
        break;
    case '/FormInscription':
        $route->get('/FormInscription',[new FormControllers(),'login']);
        break;
        case '/boutique':
            $route->get('/boutique',[new FormControllers(),'store']);
            break;
}

$route->resolve($_SERVER['REQUEST_URI'],$_SERVER['REQUEST_METHOD']);
