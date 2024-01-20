<?php

    class Autoloader {
        private $paths;
    
        public function __construct($paths) {
            $this->paths = $paths;
            spl_autoload_register(array($this, 'load'));
        }
    
        public function load($class) {
            foreach ($this->paths as $path) {
                $file = realpath($path . '/' . str_replace('\\', '/', $class) . '.php');
                if ($file && is_file($file)) {
                    include($file);
                    return;
                }
            }
        }
    }
    
    $paths = [
        realpath('../header/'),
        realpath('../app/Models/'),
        realpath('../app/Models/DAO/Actualite'),
        realpath('../app/Models/DAO/Boutique'),
        realpath('../app/Models/DAO/Evenement'),
        realpath('../app/Models/DAO/Pronostique'),
        realpath('../app/Models/DAO/Utilisateur'),
        realpath('../app/Models/DAO/Equipe'),
        realpath('../app/Models/DAO/Categorie'),
        realpath('../app/Controllers/'),
        realpath('app/'),
        realpath('../public/Route/'),
        realpath('../app/classes/'),
        realpath('../app/Controllers/classesAbstraites/'),
        realpath('config/'),
        realpath('../config/'),
        realpath('../app/Controllers/Formulaire/Strategy'),
        realpath('../app/Controllers/Pages/Prono/'),
        realpath('../app/Controllers/Pages/Jeu/'),
        realpath('../app/Controllers/Pages/Actualite/'),
        realpath('../app/Controllers/Pages/Admin/'),
        realpath('../app/Controllers/Pages/Deconnexion/'),
        realpath('../app/Controllers/Pages/Authentification'),
        realpath('../app/Controllers/Pages/Boutique')
    ];
    
    $autoloader = new Autoloader($paths);
    

$autoloader = new Autoloader($paths);
