<?php
class ActuController implements DefaultActualiteStrategy{
    public function index() {
        (new VerifSession());
        $userId = (new UtilisateurDAO())->getUtilisateurByName($_SESSION['nom']);   
        // Vérifier si la variable de session 'currpost' est définie
        if (isset($_SESSION['currpost']) && !empty($_SESSION['currpost']) && $_SESSION['currpost'] != 0) {
            // Si 'currpost' est défini, récupérer les données en fonction de sa valeur
            $currPostValue = $_SESSION['currpost'];
            
    
            View::View('actu', [
                "tabUsers" => (new UtilisateurDAO())->getAllUsers(),
                'tabPosts' => (new ActuDAO())->getPostsByCurrPost($currPostValue),
                'tabClassement' => (new UtilisateurDAO())->getTop10(),
                "pointsUser"=>( new UtilisateurDAO())->getPointUser($_SESSION['nom']),
                "tabLikesById"=>(new LikesDAO())->getByUserId($userId)
            ]);
        } else {
            // Si 'currpost' n'est pas défini, récupérer toutes les publications normalement
            View::View('actu', [
                "tabUsers" => (new UtilisateurDAO())->getAllUsers(),
                'tabPosts' => (new ActuDAO())->getAll(),
                'tabClassement' => (new UtilisateurDAO())->getTop10(),
                "pointsUser"=>( new UtilisateurDAO())->getPointUser($_SESSION['nom']),
                "tabLikesById"=>(new LikesDAO())->getByUserId($userId)
            ]);
            $_SESSION['currpost'] = 0;
        }
    }

        public function sendLikes(){
            
            $tabLikesById = (new LikesDAO())->getByUserId($_SESSION['nom']);
            echo json_encode($tabLikesById);
            $encodeDataArray = [];

            foreach($tabLikesById as $like){
                if(!empty($like)){
                    $likeData = [
                        'postId' => $like->getPostId(),
                        'userId' => $like->getUserId(),
                    ];
                    $encodeDataArray[] = $likeData;
                }
            }

            echo json_encode([1=>$encodeDataArray],true);
        }
    
    // ajouter tab likes pour like bleu
    
    
  
}