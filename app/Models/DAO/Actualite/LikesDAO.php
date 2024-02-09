<?php

class LikesDAO extends DAO{

        public function getAll(){
            $sql = "SELECT * FROM Likes";
            $sth = $this->queryAll($sql);
            $tab = [];
            foreach($sth as $like){
                $like = new Likes($like[0],$like[1]);
                $tab[] = $like;
            }
            return $tab;
        }
    
        public function getByUserId($id){
            $sql = "SELECT * FROM LIKES WHERE UTILISATEUR_ID = :id";
            $params = array(":id" => $id);
            $sth = $this->queryAll($sql, $params);
            $tab = [];
            foreach($sth as $like){
                $like = new Likes($like[0],$like[1]);
                $tab[] = $like;
            }
            return $tab;
        }
        
}