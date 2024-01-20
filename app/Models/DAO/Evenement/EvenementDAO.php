<?php



class EvenementDAO extends DAO{
        public function get($id){
            $sql = "SELECT * FROM Evenement WHERE evenement_id = :id";
            $params = array(":id" => $id);
            $sth = $this->queryRow($sql, $params);
            $row = $sth->fetch(PDO::FETCH_ASSOC);
            if ($row == false) {
                return null;
            }
            return $row;
        }
        public function getAll(){
            $sql = "SELECT * FROM `EVENEMENT` WHERE ACTIVE = 1 AND DATE_EVENEMENT > SYSDATE()";

            $sth = $this->queryAll($sql);
            $tab = [];
            foreach($sth as $event){
                $evenement = new Evenement($event[0],$event[1],$event[2],$event[3],$event[4],$event[5],$event[6],$event[7]);
                $tab[] = $evenement;
            }
            return $tab;

        }
    
        public function insertEvenement($data){
            $sql = "INSERT INTO EVENEMENT (`NOM_EVENEMENT`, `DATE_EVENEMENT`, `EQUIPE_DOMICILE`, `EQUIPE_EXTERIEUR`, `COTE_DOMICILE`, `COTE_EXTERIEUR`, `CAT_SPORT`, `ACTIVE`)  VALUES (:nom_event,:date_event, :equD, :equE, :coteD, :coteE,:cat,:active)";
            echo "data !!!!";
            var_dump($data);
            echo "data !!!!!";
            $params= array('nom_event'=>$data['nom'],
            'date_event'=>$data['date'],
               'equD'=>$data['equD'],
               'equE'=>$data['equG'],
               'coteD'=>$data['coteD'],
               'coteE'=>$data['coteE'],
               'cat'=>$data['cat'], 
               'active'=>1 );
            $this->insert($sql,$params);
        }
    
        public function updateEvenement($data){
            $sql = "UPDATE Evenement SET idMatch = :idMatch, idUtilisateur = :idUtilisateur, score1 = :score1, score2 = :score2, points = :points WHERE id = :id";
            $sth = $this->insert($sql);
            return $sth;
        }
    
        /*
        public function deleteEvenement($id){
            $sql = "DELETE FROM Evenement WHERE id = :id";
            $params = array(":id" => $id);
            $sth = $this->delete($sql);
            return $sth->rowCount();
        }
        */

            public function getEarly(){
            $sql = "SELECT * FROM `EVENEMENT` WHERE ACTIVE = 1 AND DATE_EVENEMENT > NOW();";

            $sth = $this->queryAll($sql);
            $tab = [];
            foreach($sth as $event){
                $evenement = new Evenement($event[0],$event[1],$event[2],$event[3],$event[4],$event[5],$event[6],$event[7]);
              
                $tab[] = $evenement;
            }
            return $tab;
        }

        public function getLate(){
            $sql = "SELECT * FROM `EVENEMENT` WHERE ACTIVE = 1 AND DATE_EVENEMENT < NOW();";

            $sth = $this->queryAll($sql);
            $tab = [];
            foreach($sth as $event){
                $evenement = new Evenement($event[0],$event[1],$event[2],$event[3],$event[4],$event[5],$event[6],$event[7]);
              
                $tab[] = $evenement;
            }
            return $tab;
        }

        public function getCategorie($categorie){
            $sql = "SELECT * FROM `EVENEMENT` WHERE ACTIVE = 1 AND CATEGORIE = :categorie;";

            $params = array(":categorie" => $categorie);
            $sth = $this->queryAll($sql, $params);
            $tab = [];
            foreach($sth as $event){
                $evenement = new Evenement($event[0],$event[1],$event[2],$event[3],$event[4],$event[5],$event[6],$event[7]);
              
                $tab[] = $evenement;
            }
            return $tab;
        }

        public function getEvenementName($nom){
            $sql = "SELECT * FROM `EVENEMENT` WHERE ACTIVE = 1 AND NOM_EVENEMENT = :nom;";
            $params = array(":nom" => $nom);
            $sth = $this->queryAll($sql, $params);
            $tab = [];
            foreach($sth as $event){
                $evenement = new Evenement($event[0],$event[1],$event[2],$event[3],$event[4],$event[5],$event[6],$event[7]);
              
                $tab[] = $evenement;
            }
            return $tab;
        }

        public function getHigestCote(){
            $sql = "SELECT *FROM `EVENEMENT` WHERE ACTIVE = 1 ORDER BY GREATEST(COTE_DOMICILE, COTE_EXTERIEUR) DESC;";
            $sth = $this->queryAll($sql);
            $tab = [];
            foreach($sth as $event){
                $evenement = new Evenement($event[0],$event[1],$event[2],$event[3],$event[4],$event[5],$event[6],$event[7]);
                $tab[] = $evenement;
            }
            return $tab;
        }

        public function getLowestCote(){
            $sql = "SELECT *FROM `EVENEMENT` WHERE ACTIVE = 1 ORDER BY GREATEST(COTE_DOMICILE, COTE_EXTERIEUR) ASC;";
            $sth = $this->queryAll($sql);
            $tab = [];
            foreach($sth as $event){
                $evenement = new Evenement($event[0],$event[1],$event[2],$event[3],$event[4],$event[5],$event[6],$event[7]);
                $tab[] = $evenement;
            }
            return $tab;
        }

        public function getHigestCoteDomicile(){
            $sql = "SELECT *FROM `EVENEMENT` WHERE ACTIVE = 1 ORDER BY COTE_DOMICILE DESC;";
            $sth = $this->queryAll($sql);
            $tab = [];
            foreach($sth as $event){
                $evenement = new Evenement($event[0],$event[1],$event[2],$event[3],$event[4],$event[5],$event[6],$event[7]);
                $tab[] = $evenement;
            }
            return $tab;
        }
        
        public function getLowestCoteDomicile(){
            $sql = "SELECT *FROM `EVENEMENT` WHERE ACTIVE = 1 ORDER BY COTE_DOMICILE ASC;";
            $sth = $this->queryAll($sql);
            $tab = [];
            foreach($sth as $event){
                $evenement = new Evenement($event[0],$event[1],$event[2],$event[3],$event[4],$event[5],$event[6],$event[7]);
                $tab[] = $evenement;
            }
            return $tab;
        }
        
}
