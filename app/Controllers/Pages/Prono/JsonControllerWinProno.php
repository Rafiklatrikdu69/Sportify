<?php
class JsonControllerWinProno implements DefaultJsonController {
    public function index() {

        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            echo "quoicoubeh";
            $data = file_get_contents("php://input");
            $prono = json_decode($data, true);

            if($prono['match_id']!=0 &&$prono['cote']!=0){
                echo $prono['match_id'].$prono['cote'];
               
                (new PronostiqueDAO())->makeWin($prono['match_id'],$prono['cote']);
                echo "chaine pas termine";
                return;
            }
            
         
           
        
    }
    }

}