<?php

function OpenBD(){
    require("../../../../config/Config.php"); 
    require("../../../../app/Models/Singleton.php");
    try {
        $bd = Singleton::getInstance()->getBdd(); 
        return $bd;
    } catch (PDOException $e) {
        die('Erreur : ' . $e->getMessage());
        return null;
    } 
}

function test(){
    $BD = OpenBD(); 
    try{
        $tab = array(); 
        $result = $BD->query("SELECT PSEUDO, SCORE_CLASSEMENT FROM UTILISATEUR ORDER BY SCORE_CLASSEMENT DESC LIMIT 10");
        foreach ($result as $row) {
            $info = array(); 
            $info[] = $row['SCORE_CLASSEMENT']; 
            $info[] = $row['PSEUDO']; 
            $tab[] = $info; 
        }
        return $tab; 
    }catch (PDOException $e) {
        $BD->rollBack();
        echo "Erreur lors de l'insertion : " . $e->getMessage();
        return null; 
    }
}