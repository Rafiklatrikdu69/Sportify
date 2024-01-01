<?php
session_start();
require '../vendor/Autoloader.php';

$route = new Route();

$request = $_SERVER['REQUEST_URI'];

switch ($request) {
    case '/public/':
        $route->get('/public/', [new HomeController(), 'index']);
        break;
        case '/public/json':
            $route->post('/public/json', [new JsonController(), 'supp']);
            break;
            case '/public/json-item':
                $route->post('/public/json-item', [new JsonControllerItem(), 'ajout']);
                break;
                case '/public/json-actu':
                    $route->post('/public/json-actu', [new JsonControllerActu(), 'ajoutActu']);
                    break;
                    case '/public/json-prono':
                        $route->post('/public/json-prono', [new JsonControllerProno(), 'verificationProno']);
                        break;
                        case '/public/json-prono-victoire':
                            $route->post('/public/json-prono-victoire', [new JsonControllerWinProno(), 'victoire']);
                            break;
                            
                            case '/public/connexion':
                                $route->get('/public/connexion', [new ConnexionController(), 'index']);
                                
                                
                                break;
                                case '/public/verification-formulaire-connexion':
                                    $route->post('/public/verification-formulaire-connexion', [new FormConnexionController(), 'verification']);
                                    break;
                                    case '/public/inscription':
                                        
                                        $route->get('/public/inscription', [new InscriptionControllers(), 'index']);
                                        break;
                                        
                                        case '/public/verification-formulaire-inscription':
                                            $route->post('/public/verification-formulaire-inscription', [new FormInscriptionController, 'verification']);
                                            break;
                                            
                                            case '/public/boutique':
                                                $route->get('/public/boutique', [new StoreController(), 'index']);
                                                break;
                                                
                                                case '/public/pronostique':
                                                    $route->get('/public/pronostique', [new PronoController(), 'index']);
                                                    break;
                                                    
                                                    case '/public/deconnexion':
                                                        $route->get('/public/deconnexion', [new DeconnexionController(), 'index']);
                                                        break;
                                                        
                                                        
                                                        case '/public/administration':
                                                            $route->get('/public/administration', [new AdministrationController(), 'index']);
                                                            break;
                                                            case '/public/administration/suppr':
                                                                $route->get('/public/suppr', [new SuppressionController(), 'suppr']);
                                                                break;
                                                                case '/public/actu':
                                                                    $route->get('/public/actu', [new ActuController(), 'index']);
                                                                    break;
                                                                    case '/public/jeu':
                                                                        $route->get('/public/jeu', [new JeuController(), 'index']);
                                                                        break;
                                                                    case '/public/json-point-jeu':
                                                                    $route->get('/public/json-point-jeu',[new JsonControllerJeu(),'index']);
                                                                    break;
                                                                    case '/public/json-jeu-insere':
                                                                        $route->post('/public/json-jeu-insere',[new JsonControllerJeu(),'point']);
                                                                        break;
                                                                        default:
                                                                        // Gestion des erreurs ou redirection par défaut
                                                                        break;
                                                                    }
                                                                    
                                                                    $route->resolve($_SERVER['REQUEST_URI'], $_SERVER['REQUEST_METHOD']);
                                                                    ?>
