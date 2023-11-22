<?php
class Autoloader {

    private $paths;

    public function __construct($paths) {
        $this->paths = $paths;
        spl_autoload_register(array($this, 'load'));
    }

    // Cette méthode charge toutes les classes des dossiers spécifiés
    public function load($class) {
        foreach ($this->paths as $path) {
            $file = $path . '/' . $class . '.php';
            if (is_file($file)) {
                require_once($file);
                return; 
            }
        }
    }
}

$paths = [
    '../app/Controllers/',
    '../app/Models/',
    'app/',
    '../public/Route/',
    '../app/classes/',
    '../app/Controllers/classesAbstraites/',
    '../config/',
    '../app/Controllers/Formulaire',
];

$autoloader = new Autoloader($paths);
