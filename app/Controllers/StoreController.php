<?php

// cette classe est un début -> à changer !
class StoreController extends Controllers {

    public function index() {

        (new VerifSession());
        View::View('boutique',[
            "tabItems"=>(new ItemsDAO())->getAll(),
            "pointsUser"=>(new utilisateurDAO())->getPointUser($_SESSION['nom']),
            "userId"=>(new utilisateurDAO())->getUserId($_SESSION['nom'])
        ]);
        
        // $items = (new ItemsDAO())->getAll();
        // // Construction de l'array à encoder en JSON
        // $encodedDataArray = [];

        // foreach ($items as $item) {
        //     if (!empty($item)) {

        //         $itemData = [
        //             'id' => $item->getId(),
        //             'nom' => $item->getName(), 
        //             'type' => $item->getType(),
        //             'description' => $item->getDescription(),
        //             'prix' => $item->getPrice(),
        //             'couleur' => $item->getColor(),
        //         ];
                
        //         $encodedDataArray[] = $itemData;
        //     }
        // }
        
        // // Encodage des données en JSON
        // $finalEncodedData = json_encode($encodedDataArray);

        // // Écriture des données encodées dans le fichier items.json
        // file_put_contents('items.json', $finalEncodedData);
    }
}
