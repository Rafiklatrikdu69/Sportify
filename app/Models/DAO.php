<?php

abstract class DAO 
{

  private $_erreur; //stocke les messages d'erreurs associées au PDOException
  private $_debug;
  
 

  private function _requete($sql, $args = null)  
  {
    if ($args == null) 
    {
	  $pdostmt = Singleton::getInstance()->getBdd()->query($sql);// exécution directe
    }
    else 
    {
	  $pdostmt = Singleton::getInstance()->getBdd()->prepare($sql);// requête préparée
	  $pdostmt->execute($args);
    }
    return $pdostmt;//pdoStatement  = resultat de la requete 
    //pdo objet de la connexion 
  }
 
  // retourne un tableau 1D avec les données d'un seul enregistrement
  // ou false 
  public function queryRow($sql, $args = null)
  {
	try
	{
		$pdostmt = $this->_requete($sql, $args);
		$res = $pdostmt->fetch();//renvoie un tab 
    $pdostmt->closeCursor();//ferme la connexion
	}
	catch(PDOException $e)
	{ 
	  
	  $res = false;
	} 
    return $res;
  }
  
  //retourne un tableau 2D avec éventuellement plusieurs enregistrements
  public function queryAll($sql, $args = null)
  {
 	try
	{
		$pdostmt = $this->_requete($sql, $args);
		$res = $pdostmt->fetchAll();
                $pdostmt->closeCursor();
	}
	catch(PDOException $e)
	{ 
	  if($this->_debug)
            die($e->getMessage());
          $this->_erreur = 'query';
	  $res = false;
	} 
    return $res;
  }

  public function insert($sql,$args =null){
    try{
      $pdostmt = $this->_requete($sql, $args);
     
      $pdostmt->closeCursor();
    }
    catch(PDOException $e)
    {
      if($this->_debug)
            die($e->getMessage());
          $this->_erreur = 'insert';
      $res = false;
    }
    
  }

  public function update($sql,$args =null){
    try{
      $pdostmt = $this->_requete($sql, $args);
      $pdostmt->closeCursor();
    }
    catch(PDOException $e)
    {
      if($this->_debug)
            die($e->getMessage());
          $this->_erreur = 'update';
      $res = false;
    }
    
  }

  public function delete($sql,$args =null){
    try{
      $pdostmt = $this->_requete($sql, $args);
      $pdostmt->closeCursor();
    }
    catch(PDOException $e)
    {
      if($this->_debug)
            die($e->getMessage());

          $this->_erreur = 'delete';

      $res = false;
    }
    
  }




}
