<?php

require '../vendor/Autoloader.php';

$route = new Route();

$request = $_SERVER['REQUEST_URI'];

switch ($request) {
    case '/public/':
        $route->get('/public/', [new HomeController(), 'index']);
        break;

    case '/public/connexion':
    $route->get('/public/connexion', [new ConnexionController(), 'index']);
    
        
    break;
    case '/public/verification-formulaire-connexion':
        $route->post('/public/verification-formulaire-connexion', [new FormConnexionController(), 'verification']);

    case '/public/inscription':

        $route->get('/public/inscription', [new InscriptionControllers(), 'index']);
        break;

    case '/public/verification-formulaire-inscription':
        $route->post('/public/verification-formulaire-inscription', [new FormConnexionController(), 'verification']);
    break;

    case '/public/boutique':
        $route->get('/public/boutique', [new StoreController(), 'index']);
        break;

    case '/public/pronostique':
        $route->get('/public/pronostique', [new PronoController(), 'index']);
        break;

    default:
        // Gestion des erreurs ou redirection par défaut
        break;
}


$route->resolve($_SERVER['REQUEST_URI'], $_SERVER['REQUEST_METHOD']);
?>
