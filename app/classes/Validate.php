<?php

class Validate{
  
    static function html($text){
      return  htmlspecialchars(addslashes(trim($text)), ENT_QUOTES, "UTF-8");
    }
}