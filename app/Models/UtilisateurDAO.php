<?php


class UtilisateurDAO extends DAO{
    public function select($nom,$mdp){
        // $sql = 'select * from Utilisateur where PSEUDO like :pseudo and EMAIL like :mail';
        // $res=  $this->queryRow($sql,array('pseudo'=>$nom,
        // 'mail'=>$mdp));
        // if($res){   
        //     echo "utilisateur present";
        //     /* TODO : Insertion des données dans la session */
        //     $user = new Utilisateur($res['id'],$res[''],$res[''],$res['']);
        //     return $user;
        // }
        // else{
        //     echo "Utilisateur inconnue";
            
        // }
       
    }
    public function insertUtilisateur($sql){
       
        $sql = "INSERT INTO `UTILISATEUR`(`UTILISATEUR_ID`, `PSEUDO`, `password`, `EMAIL`, `POINT_ACTUEL`, `POINT_CLASSEMENT`, `STATUS`, `SCORE_JEU`, `NB_POST`) 
        VALUES (2,'Ramazan la chienne','abcd','raffraff@',3,12,1,4,8)";
        $this->insert($sql);
    }
}