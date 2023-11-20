<?php

class Autoloader {

    private $path;
    public function __construct($path) {
       $this->path = $path;
       spl_autoload_register(array($this, 'load') );
    }
        //Cette methode charge toute les classe des dossier avec le chemin specicifier
    function load( $file ) {
        if (is_file($this->path . '/' . $file . '.php')) {
            require_once( $this->path . '/' . $file . '.php' );
        }
    }
}

$autoloader_controllers= new Autoloader('../app/Controllers/');
$autoloader_app = new Autoloader('app/');
$autoloader_route = new Autoloader('../public/Route/');
$autoloader_classes = new Autoloader('../app/classes/');
$autoloader_interfaces = new Autoloader('../app/Controllers/classesAbstraites/');
$autoloader_config= new Autoloader('config/');

