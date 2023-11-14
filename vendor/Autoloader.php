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


$autoloader_classes = new Autoloader('Controllers/');
$autoloader_admin = new Autoloader('Route/');


