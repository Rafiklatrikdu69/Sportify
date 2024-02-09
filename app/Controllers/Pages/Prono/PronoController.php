<?php

class PronoController implements DefaultJsonController{
    public function index(){
     
       (new VerifSession());
        View::View('pronostique',[
            "tableau"=>(new EvenementDAO())->getAll(),
            "tableauProno"=>(new PronostiqueDAO())->selectPronoByUser($_SESSION['nom']),
            "lastConnection"=>(new UtilisateurDAO())->getLastConnection($_SESSION['nom']),
            "tabItems"=>(new ItemsDAO())->getAll(),
            "tabItemsOwned"=>(new ItemsDAO())->getOwnedItems($_SESSION['nom']),
            "tabBadge"=>(new ItemsDAO())->getItemsByType($_SESSION['nom'], "Badge"),
            "userPdp"=>(new utilisateurDAO())->getPdp($_SESSION['nom']),
            "tabIcone"=>(new ItemsDAO())->getItemsByType($_SESSION['nom'], "Icone"),
            "userBadge"=>(new utilisateurDAO())->getBadge($_SESSION['nom']),
            "tabEcusson"=>(new ItemsDAO())->getItemsByType($_SESSION['nom'], "Ecusson"),
            "userEcusson"=>(new utilisateurDAO())->getEcusson($_SESSION['nom']),
            "pointsUser"=>(new utilisateurDAO())->getPointUser($_SESSION['nom']),
            "userId"=>(new utilisateurDAO())->getUserId($_SESSION['nom']),
            "userRank"=>(new utilisateurDAO())->getClassement($_SESSION['nom']),
            "pronoWin"=>(new utilisateurDAO())->getPronoWin($_SESSION['nom']),
        ]);
    

        $testData=(new EvenementDAO())->getAll();
        $encodedDataArray = [];
        
        foreach ($testData as $event) {
            if (!empty($event)) {
               
                $eventData = [
                    'id' => $event->getId(),
                    'equipe_domicile' => $event->getEquipe_domicile(),
                    'equipe_exterieur' => $event->getEquipe_exterieur(),
                    'nom_evenement' => $event->getNomEvenement(),
                    'cat_sport' => $event->getCatSport(),
                    'date_evenement' => $event->getDate_evenement(),
                    'cote_domicile' => $event->getCote_domicile(),
                    'cote_exterieur' => $event->getCote_exterieur(),
                ];
        
              
                $encodedDataArray[] = $eventData;
            }
        }
        
       
        $finalEncodedData = json_encode($encodedDataArray);
 
        file_put_contents('data.json', $finalEncodedData);
    
    }

    public function insert(){

        var_dump($_POST);
        $event = new EvenementDAO();
        $event->insertEvenement($_POST);
    }
    
  
}