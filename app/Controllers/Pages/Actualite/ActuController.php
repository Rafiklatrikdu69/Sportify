<?php
class ActuController implements DefaultActualiteStrategy{
    public function index() {
        (new VerifSession());
        $userId = (new UtilisateurDAO())->getUtilisateurByName($_SESSION['nom']);  
        $tabUsers = (new UtilisateurDAO())->getAllUsers(); 
        
        // Vérifier si la variable de session 'currpost' est définie
        if (isset($_SESSION['currpost']) && !empty($_SESSION['currpost']) && $_SESSION['currpost'] != 0) {
            // Si 'currpost' est défini, récupérer les données en fonction de sa valeur
            $currPostValue = $_SESSION['currpost'];
            View::View('actu', [
                "tabUsers" => $tabUsers,
                "tabPdp" => (new ActuDAO())->getPdpPosts(),
                'tabPosts' => (new ActuDAO())->getPostsByCurrPost($currPostValue),
                'tabClassement' => (new UtilisateurDAO())->getTop10(),
                "tabLikesById"=>(new LikesDAO())->getByUserId($userId),
                // "tabItems"=>(new ItemsDAO())->getAll(),
                // "tabItemsOwned"=>(new ItemsDAO())->getOwnedItems($_SESSION['nom']),
                "tabBadge"=>(new ItemsDAO())->getItemsByType($_SESSION['nom'], "Badge"),
                "userPdp"=>(new utilisateurDAO())->getPdp($_SESSION['nom']),
                "tabIcone"=>(new ItemsDAO())->getItemsByType($_SESSION['nom'], "Icone"),
                "userBadge"=>(new utilisateurDAO())->getBadge($_SESSION['nom']),
                "tabEcusson"=>(new ItemsDAO())->getItemsByType($_SESSION['nom'], "Ecusson"),
                "userEcusson"=>(new utilisateurDAO())->getEcusson($_SESSION['nom']),
                "pointsUser"=>(new utilisateurDAO())->getPointUser($_SESSION['nom']),
                // "userId"=>(new utilisateurDAO())->getUserId($_SESSION['nom']),
                "userRank"=>(new utilisateurDAO())->getClassement($_SESSION['nom']),
                "pronoWin"=>(new utilisateurDAO())->getPronoWin($_SESSION['nom']),
            ]);
            
            // foreach ($tabUsers as $user) {
                //     $userId = $user->getUtilisateurByName($_SESSION['nom']);
                //     ${"pdp" . $userId} = (new ActuDAO())->getPdpById($userId);
                // }
            } else {
                // Si 'currpost' n'est pas défini, récupérer toutes les publications normalement
                View::View('actu', [
                    "tabUsers" => $tabUsers,
                    "tabPdp" => (new ActuDAO())->getPdpPosts(),
                    'tabPosts' => (new ActuDAO())->getAll(),
                    'tabClassement' => (new UtilisateurDAO())->getTop10(),
                    "tabLikesById"=>(new LikesDAO())->getByUserId($userId),
                    // "tabItems"=>(new ItemsDAO())->getAll(),
                    // "tabItemsOwned"=>(new ItemsDAO())->getOwnedItems($_SESSION['nom']),
                    "tabBadge"=>(new ItemsDAO())->getItemsByType($_SESSION['nom'], "Badge"),
                    "userPdp"=>(new utilisateurDAO())->getPdp($_SESSION['nom']),
                    "tabIcone"=>(new ItemsDAO())->getItemsByType($_SESSION['nom'], "Icone"),
                    "userBadge"=>(new utilisateurDAO())->getBadge($_SESSION['nom']),
                    "tabEcusson"=>(new ItemsDAO())->getItemsByType($_SESSION['nom'], "Ecusson"),
                    "userEcusson"=>(new utilisateurDAO())->getEcusson($_SESSION['nom']),
                    "pointsUser"=>(new utilisateurDAO())->getPointUser($_SESSION['nom']),
                    //"userId"=>(new utilisateurDAO())->getUserId($_SESSION['nom']),
                    "userRank"=>(new utilisateurDAO())->getClassement($_SESSION['nom']),
                    "pronoWin"=>(new utilisateurDAO())->getPronoWin($_SESSION['nom']),
                ]);
                $_SESSION['currpost'] = 0;
                // foreach ($tabUsers as $user) {
                    //     $userId = $user->getUtilisateurByName($_SESSION['nom']);
                    //     ${"pdp" . $userId} = (new ActuDAO())->getPdpById($userId);
                    // }
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
            public function profil() {
                        echo "jdsjsfj";
                if ($_SERVER['REQUEST_METHOD'] === 'POST') {
                    View::View('profil', ["point"=>(new utilisateurDAO())->getPointUser($_POST['pseudo']),
                                    "posts"=>(new ActuDAO())->getPostByNameUser($_POST['pseudo']),
                                    "userRank"=>(new utilisateurDAO())->getClassement($_POST['pseudo'])]);
                  var_dump($_POST);
                   
                }
                // View::View('profil', [
                    
                // ]);
           
               
            }

            public function ajoutCom() {
        
            }
            public function like() {
              
            }
            public function ajoutActu() {
             
            }
            }

          
            
            
        