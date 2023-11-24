<?php


class UtilisateurDAO extends DAO{
    public function select($nom,$mdp){
        $sql = "SELECT * from `UTILISATEUR` where PSEUDO like :pseudo and MOT_DE_PASSE like :mdp";
         $res=  $this->queryRow($sql,array('pseudo'=>$nom,
         'mdp'=>$mdp));
        
         if($res){   
             echo "utilisateur present";
             
         
         }
         else{
             echo "Utilisateur inconnue";
            
         }
       
    }
    public function insertUtilisateur($sql){
    
        $this->insert($sql);
       // $sql = "INSERT INTO Evenement (id, idMatch, idUtilisateur, score1, score2, points) VALUES (:id, :idMatch, :idUtilisateur, :score1, :score2, :points)";
       
    }

 
}