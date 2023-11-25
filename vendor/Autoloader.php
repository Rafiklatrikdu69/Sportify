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
                    require_once($file);
                    return;
                }
            }
        }
    }
    
    $paths = [
        realpath('../header/'),
        realpath('../app/Models/'),
        realpath('../app/Controllers/'),
        realpath('app/'),
        realpath('../public/Route/'),
        realpath('../app/classes/'),
        realpath('../app/Controllers/classesAbstraites/'),
        realpath('config/'),
        realpath('../config/'),
        realpath('../app/Controllers/Formulaire'),
    ];
    
    $autoloader = new Autoloader($paths);
    

$autoloader = new Autoloader($paths);
