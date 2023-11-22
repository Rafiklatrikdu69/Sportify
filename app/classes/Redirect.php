<?php

class Redirect{
    static function redirect($url){
        header("Location: ".$url);
    }
}