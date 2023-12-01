<?php


// Implémente le pattern Singleton
class Singleton 
{
  private $_bdd = null;
  private static $_instance = null;

  //appelée par new
  private function __construct ()
  {
    //creer la connexion a la BD
	$this->_bdd = new PDO('mysql:host='.config::$host.'; dbname='.config::$db.'; charset=utf8', config::$db_user, config::$db_password);
	$this->_bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  }


  public static function getInstance()
  {
    if(is_null(self::$_instance))//si l'instance est null alors on la creer 
      self::$_instance = new Singleton();
    return self::$_instance;//retourne l'instance
  }

  public function getBdd()
  {
    return $this->_bdd;
  }

}
