<?php

class Route {

private $routes = [];

public function get($path, callable $callable) {
    //callable est une fonction anonyme appeler -> function(){executer le code ici }
    $this->addRoute('GET', $path, $callable);
}

public function post($path, callable $callable) {
    $this->addRoute('POST', $path, $callable);
}

private function addRoute($method, $path, callable $callable) {
    $this->routes[$method][$path] = $callable;
}

public function resolve(String $url, $method){
    $path = explode('?', $url)[0];//on vire les caraceteres de l'url 
    $action = $this->routes[$method][$path] ?? null;

    if (is_null($action)) {
        echo "Route inexistante";
        return null;
    }else{
        //echo "La vue existe ";
    }

    
    call_user_func($action);

    return $action;
}
}
