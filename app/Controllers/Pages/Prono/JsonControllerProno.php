<?php

class JsonControllerProno implements DefaultJsonController{
    public function index(){ 
        
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $pronostiqueur_id = null;
            if (isset($_SESSION['nom'])) {
                $nom = $_SESSION['nom'];
                $pronostiqueur_id = (new UtilisateurDAO())->getUtilisateurByName($nom);
            }
            if ($pronostiqueur_id !== null) {
                $data = file_get_contents("php://input");
                $prono = json_decode($data, true);
                
                
                $prono['pronostiqueur_id'] = $pronostiqueur_id;
                // echo  $prono['pronostiqueur_id'];
                
                $resultat = "La mise : " . $prono['mise'] . " Match prono : " . $prono['match_prono'];
                
                // echo $resultat;
                $res = (new PronostiqueDAO())->selectMisePronoById($prono);
                if( !is_null($res)){ 
                    //echo "point actuels  :" .$res[0];
                    if($res[0]>=$prono['mise']){ 
                        if( (new PronostiqueDAO())->selectIDPronostiqueur($prono)==FALSE ) {
                            (new PronostiqueDAO())->insertPronostique($prono);
                            (new UtilisateurDAO())->updatePoint($prono['pronostiqueur_id'],$res[0],$prono['mise']);
                        }else{
                            echo true;
                        }
                    }else{ 
                        echo "point";
                    }
                }
            } else {
                echo "Erreur : Impossible de récupérer l'ID du pronostiqueur depuis la session.";
            }
        }       
    }

    // public function affichageEvent(){
    //     $testData=(new EvenementDAO())->getAll();
    //     $encodedDataArray = [];
    //     $tab = [];
        
    //     foreach ($testData as $event) {
    //         if (!empty($event)) {
               
    //             $eventData = [
    //                 'id' => $event->getId(),
    //                 'equipe_domicile' => $event->getEquipe_domicile(),
    //                 'equipe_exterieur' => $event->getEquipe_exterieur(),
    //                 'nom_evenement' => $event->getNomEvenement(),
    //                 'cat_sport' => $event->getCatSport(),
    //                 'date_evenement' => $event->getDate_evenement(),
    //                 'cote_domicile' => $event->getCote_domicile(),
    //                 'cote_exterieur' => $event->getCote_exterieur(),
    //             ];
        
              
    //             $encodedDataArray[] = $eventData;
    //         }
    //     }
        
       
    //     $finalEncodedData = json_encode($encodedDataArray);
 
    //     file_put_contents('data.json', $finalEncodedData);
    // }
}