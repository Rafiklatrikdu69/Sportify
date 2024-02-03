<?php


// <?php
// class BoutiqueStrategy{
//     private $strategy;
//     public function __construct(DefautBoutiqueStrategy $strategy) {
//         $this->strategy = $strategy;
//     }
//     public function index() {
//         return $this->strategy->index();
//     }
//     public function show() {
//         return $this->strategy->show();
//     }
// }
class JsonControllerItem implements DefautBoutiqueStrategy{
    public function index() {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $data = file_get_contents("php://input");
            $item = json_decode($data, true);

            if (!is_null((new ItemsDAO())->get($item['item_id']))) {
                if (is_null((new ItemsDAO())->selectItemIventaire($item['item_id'], $_SESSION['nom']))) {
                    if ((new UtilisateurDAO())->getPointUser($_SESSION['nom']) >= $item['points']) {
                        (new ItemsDAO())->insertInventaire((new UtilisateurDAO())->getUserId($_SESSION['nom']), $item['item_id']);
                        (new ItemsDAO())->updatePrix($item['points'], (new UtilisateurDAO())->getUserId($_SESSION['nom']));

                        // Return a JSON response with the item id
                        echo json_encode(['item_id' => $item['item_id']]);
                    } else {
                        // Return a JSON response indicating insufficient points
                        echo json_encode(['error' => 'points insuffisants']);
                    }
                } else {
                    // Return a JSON response indicating item already in inventory
                    echo json_encode(['error' => 'item déjà dans l\'inventaire']);
                }
            } else {
                // Return a JSON response indicating item does not exist
                echo json_encode(['error' => 'item non existant']);
            }
        }
    }


    public function  show(){
        $data = file_get_contents("php://input");
        $items = json_decode($data,true);
        var_dump($items);
       // (new ItemsDAO())->getFilteredResults($items);
    }

    // public function causeOfNotBuying($cause){
    //     $encodedData = $cause;
    //     echo json_encode(1=>$encodedData,true);
    // }
}



