<?php

class SessionController{
    public function index(){
        if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        $data = [1=>$_SESSION['currpost']];
        echo json_encode($data, true);
        }
    }
}