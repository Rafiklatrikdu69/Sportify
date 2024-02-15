<?php

class JsonControllerActu implements DefaultActualiteStrategy{
    public function index(){}
    public function ajoutActu() {
        ob_start();
        if ($_SERVER['REQUEST_METHOD'] === 'POST' && (!isset($_SESSION['currpost']) || empty($_SESSION['currpost']) || $_SESSION['currpost'] == 0)) {
            
            $user_id = (new UtilisateurDAO())->getUtilisateurByName($_SESSION['nom']);
            $actu = new Actu(0,$user_id,$_SESSION['nom'],$_POST['titre'],$_POST['contenu'],0,0);
            (new ActuDAO())->insertActu($actu->getAuteurId(),$actu->getAuteurName(),$actu->getTitre(),$actu->getContenu(),$actu->getNbLike());
            echo $actu->getAuteurId();
            echo "Actualité ajoutée avec succès";
            Redirect::redirect('actu');
        }
        ob_end_clean();
    }
    public function profil() {

            
        }
        
        public function ajoutCom() {
            
        }
        public function like() {
            
        }
        public function sendLikes() {
          
        }
        
    }
