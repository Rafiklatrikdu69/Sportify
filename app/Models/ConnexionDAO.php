<?php


class ConnexionDAO extends DAO{
    public function select($nom,$mdp){
        $sql = 'select * from Utilisateur where PSEUDO like :pseudo and EMAIL like :mail';
        $res=  $this->queryRow($sql,array('pseudo'=>$nom,
        'mail'=>$mdp));
        if($res){   
            echo "utilisateur present";
            /* TODO : Insertion des données dans la session */
            $user = new Utilisateur($res['id'],$res[''],$res[''],$res['']);
            return $user;
        }
        else{
            echo "Utilisateur inconnue";
            
        }
    }
}