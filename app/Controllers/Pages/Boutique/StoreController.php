<?php

// cette classe est un début -> à changer !
class StoreController implements DefautBoutiqueStrategy{

    public function index() {

        (new VerifSession());
        if(!(new utilisateurDAO())->getPdp($_SESSION['nom'])){
            $pdp = "images/utilisateur.png";   
        }else{
            $pdp= (new utilisateurDAO())->getPdp($_SESSION['nom']);
        }
        View::View('boutique',[
            "tabItems"=>(new ItemsDAO())->getAll(),
            "tabItemsOwned"=>(new ItemsDAO())->getOwnedItems($_SESSION['nom']),
            "tabItemsNotOwned"=>(new ItemsDAO())->getItemsNotOwned($_SESSION['nom']),
            "tabBadge"=>(new ItemsDAO())->getItemsByType($_SESSION['nom'], "Badge"),
            "userPdp"=>$pdp,
            "tabIcone"=>(new ItemsDAO())->getItemsByType($_SESSION['nom'], "Icone"),
            "userBadge"=>(new utilisateurDAO())->getBadge($_SESSION['nom']),
            "tabEcusson"=>(new ItemsDAO())->getItemsByType($_SESSION['nom'], "Ecusson"),
            "userEcusson"=>(new utilisateurDAO())->getEcusson($_SESSION['nom']),
            "pointsUser"=>(new utilisateurDAO())->getPointUser($_SESSION['nom']),
            "userId"=>(new utilisateurDAO())->getUserId($_SESSION['nom']),
            "userRank"=>(new utilisateurDAO())->getClassement($_SESSION['nom']),
            "pronoWin"=>(new utilisateurDAO())->getPronoWin($_SESSION['nom']),
        ]);
        
        

        // Écriture des données encodées dans le fichier items.json
        // file_put_contents('items.json', $finalEncodedData);
    }

    public function show(){

        $items = (new ItemsDAO())->getItemsNotOwned($_SESSION['nom']);
        // Construction de l'array à encoder en JSON
         $encodedDataArray = [];

         foreach ($items as $item) {
             if (!empty($item)) {
                 $itemData = [
                     'id' => $item->getId(),
                     'nom' => $item->getName(), 
                     'type' => $item->getType(),
                     'description' => $item->getDescription(),
                     'prix' => $item->getPrice(),
                     'couleur' => $item->getColor(),
                 ];
                 
                 $encodedDataArray[] = $itemData;
             }
         }
        
       
         echo json_encode([1=>$encodedDataArray],true);
     
    }
}






