<?php

class Route
{
    private $routes = [
        'GET' => [],
        'POST' => [],
        // Ajoutez d'autres méthodes HTTP si nécessaire
    ];
    
    public function get($path, callable $callable)
    {
        $this->addRoute('GET', $path, $callable);
    }
    
    public function post($path, callable $callable)
    {
        $this->addRoute('POST', $path, $callable);
    }
    
    private function addRoute($method, $path, callable $callable)
    {
        $this->routes[$method][$path] = $callable;
    }
    
    public function resolve(String $url, $method)
    {
        // echo $method;
        $path = explode('?', $url)[0];
        // var_dump($path);
        $action = $this->routes[$method][$path] ?? null;
        // var_dump($action);
        if (is_null($action)) {
            //echo "Route inexistante";
            return null;
        } else {
            call_user_func($action);
            return $action;
        }
    }
}
