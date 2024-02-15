<?php
session_start();
require "../vendor/Autoloader.php";

$route = new Route();

$request = $_SERVER["REQUEST_URI"];

switch ($request) {
    case "/public/":
        $route->get("/public/", [new HomeController(), "index"]);
        break;
    case "/public/json":
        $route->post("/public/json", [new JsonController(), "supp"]);
        break;
    case "/public/json-item":
        $route->post("/public/json-item", [
            new BoutiqueStrategy(new JsonControllerItem()),
            "index",
        ]);
        break;
    case "/public/json-like":
        $route->post("/public/json-like", [
            new ActualiteStrategy(new JsonControllerLike()),
            "like",
        ]);
        break;
    case "/public/json-pdp":
        $route->post("/public/json-pdp", [
            new JsonControllerPdp(),
            "updatePdp",
        ]);
        break;
        case '/public/json-badge':
            $route->post('/public/json-badge', [new JsonControllerBadge(), 'updateBadge']);
            break;
        case '/public/json-ecu':
            $route->post('/public/json-ecu', [new JsonControllerEcusson(), 'updateEcusson']);
            break;

    case "/public/json-actu":
        if (
            isset($_SESSION["currpost"]) &&
            !empty($_SESSION["currpost"]) &&
            $_SESSION["currpost"] != 0
        ) {
            $route->post("/public/json-actu", [
                new ActualiteStrategy(new JsonControllerCom()),
                "ajoutCom",
            ]);
        } else {
            $route->post("/public/json-actu", [
                new ActualiteStrategy(new JsonControllerActu()),
                "ajoutActu",
            ]);
        }
        break;
    case "/public/json-prono":
        $route->post("/public/json-prono", [
            new JsonStrategyProno(new JsonControllerProno()),
            "index",
        ]);
        break;
    case "/public/json-prono-victoire":
        $route->post("/public/json-prono-victoire", [
            new JsonStrategyProno(new JsonControllerWinProno()),
            "index",
        ]);
        break;

    case "/public/connexion":
        $route->get("/public/connexion", [
            new AuthStrategy(new ConnexionController()),
            "index",
        ]);

        break;
    case "/public/verification-formulaire-connexion":
        $route->post("/public/verification-formulaire-connexion", [
            new Strategy(new FormConnexionController()),
            "indexView",
        ]);
        break;

    case "/public/inscription":
        $route->get("/public/inscription", [
            new AuthStrategy(new InscriptionControllers()),
            "index",
        ]);
        break;

    case "/public/verification-formulaire-inscription":
        $route->post("/public/verification-formulaire-inscription", [
            new Strategy(new FormInscriptionController()),
            "indexView",
        ]);
        break;

    case "/public/boutique":
        $route->get("/public/boutique", [
            new BoutiqueStrategy(new StoreController()),
            "index",
        ]);
        break;
    case "/public/boutique/product":
        $route->get("/public/boutique/product", [
            new BoutiqueStrategy(new StoreController()),
            "show",
        ]);
        break;
    case "/public/insert-equipe":
        $route->post("/public/insert-equipe", [
            new AdministrationController(),
            "insert",
        ]);
        break;
    case "/public/insert-cat":
        $route->post("/public/insert-cat", [
            new AdministrationController(),
            "insertCat",
            ]);
        break;
    case "/public/actu/like":
        $route->get("/public/actu/like", [
            new ActualiteStrategy(new ActuController()),
            "sendLikes",
        ]);
        break;

    case "/public/pronostique":
        $route->get("/public/pronostique", [
            new JsonStrategyProno(new PronoController()),
            "index",
        ]);
        break;
    case "/public/admin":
        $route->get("/public/admin", [new AdministrationController(), "show"]);
        break;

    case "/public/deconnexion":
        $route->get("/public/deconnexion", [
            new DeconnexionController(),
            "index",
        ]);
        break;

    case "/public/administration":
        $route->get("/public/administration", [
            new AdministrationController(),
            "index",
        ]);
        break;
    case "/public/actu/profil":
        $route->post("/public/actu/profil",[
            new ActualiteStrategy(new ActuController()),
            "profil",
        ]);
            break;
    case "/public/administration/suppr":
        $route->get("/public/suppr", [new SuppressionController(), "suppr"]);
        break;
    case "/public/actu":
        $route->get("/public/actu", [
            new ActualiteStrategy(new ActuController()),
            "index",
        ]);
        break;
    case "/public/jeu":
        $route->get("/public/jeu", [new JeuController(), "index"]);
        break;
    case "/public/json-point-jeu":
        $route->get("/public/json-point-jeu", [
            new StrategyJeu(new JsonControllerJeu()),
            "index",
        ]);
        break;
    case "/public/json-jeu-insere":
        $route->post("/public/json-jeu-insere", [
            new StrategyJeu(new JsonControllerJeu()),
            "point",
        ]);
        break;
    case "/public/json-jeu-getClassement":
        $route->get("/public/json-jeu-getClassement", [
            new StrategyJeu(new JsonControllerJeu()),
            "classement",
        ]);
        break;
    case "/public/json-jeu-getMeilleurScore":
        $route->get("/public/json-jeu-getMeilleurScore", [
            new StrategyJeu(new JsonControllerJeu()),
            "meilleurScore",
        ]);
        break;
    case "/public/json-jeu-getMeilleurScoreUser":
        $route->get("/public/json-jeu-getMeilleurScoreUser", [
            new StrategyJeu(new JsonControllerJeu()),
            "meilleurScoreUser",
        ]);
        break;
    case "/public/json-jeu-UpdateScoreJeu":
        $route->post("/public/json-jeu-UpdateScoreJeu", [
            new StrategyJeu(new JsonControllerJeu()),
            "updateScore",
        ]);
        break;
    case "/public/insert-prono":
        $route->post("/public/insert-prono", [
            new JsonStrategyProno(new PronoController()),
            "insert",
        ]);
        break;
    case "/public/actu/session-actu":
        $route->get("/public/actu/session-actu", [
            new SessionController(),
            "index",
        ]);
        break;
    default:
        // Gestion des erreurs ou redirection par défaut
        break;
}

$route->resolve($_SERVER["REQUEST_URI"], $_SERVER["REQUEST_METHOD"]);
?>
