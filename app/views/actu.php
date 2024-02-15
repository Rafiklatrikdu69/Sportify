<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sportify</title>
    <link rel="stylesheet" href="../../public/css/actu_style.css">
</head>
<body>
<?php header::header("onclick='changeCurrentPost(0)'")?>

<section id="base">
    <aside id="gauche">
        <div id="ajt_actu">
            <button id="openModalActu"></button>
            
            <div class="icon" id="tichtich">
                <div id="arrow" class="arrow" onclick='changeCurrentPost(0)'></div>
            </div>
        </div>
        <div id="classement">
            <div>
                <table>
                    <tr><th colspan="3">Classement</th></tr>
                    <tr><th class="noRank">No</th>
                        <th>Pseudo</th>
                        <th>Score</th></tr>
                    <?php
                    $i = 1;
                    foreach($tabClassement as $user){
                    ?>
                        <tr><td class="noRank"><?php  echo $i ?></td>
                            <td><?php echo  $user->getPseudo()?></td>
                            <td><?php echo $user->getPointClassement()?></td></tr>
                    <?php
                        $i++;
                    }
                    ?>
                </table>
            </div>
        </div>
      
    </aside>
   
    <main>
        <?php 
        // Fonction pour trouver la PDP correspondant à l'id du post
            function findPdpForPost($tabPdp, $postId) {
                foreach ($tabPdp as $pdp) {
                    if ($pdp['POST_ID'] == $postId) {
                        return $pdp['PDP_SRC'];
                    }
                }
                // Si aucune correspondance trouvée, retournez une valeur par défaut ou gérez l'absence de PDP
                return "../../public/images/logo2.png";
            }
            //$tabPdp = [];
            if (isset($_SESSION['currpost']) && !empty($_SESSION['currpost']) && $_SESSION['currpost'] != 0) {
                $firstPost = true;
                $oo = null;
                foreach ($tabPosts as $post) {
                
                        $oo = $post->getAuteurName();
                        $postId = $post->getId();
                        $postPdp = findPdpForPost($tabPdp, $postId);
                        echo '<section id="actualite' . $post->getId() . '" class="actufixed">';
                        echo '<form class="form" method="POST" action="/public/actu/profil">
                        <span class="photo">
                            <img src="'.$postPdp.'" id="pp"> 
                            <span class="auteur">' . $post->getAuteurName() . '</span>
                        </span>
                        <input type="hidden" name="pp" value="' . $postPdp . '">
                        <input type="hidden" name="pseudo" value="' . $post->getAuteurName() . '">
                    </form>';
            
                  
                  
                        echo '<div class="titre"><h1>' . $post->getTitre() . '</h1></div>';
                        echo '<div class="contenue"><p>' . $post->getContenu() . '</p></div>';
                        echo '<div class="nbLike"><p>' . $post->getNbLike() . '</p></div>';
                        echo '<div class="like">';
                        echo '<button class="custom-like" onclick="updateLike(' . $post->getId() . ')">';
                        echo '<img src="../../public/images/like.png" id="like">';
                        echo '</button>';
                        echo '</div>';
                        echo '<div class="comment">';
                        echo '<p class="nbCom">' . $post->getNbComment() . '</p>';
                        echo '<button class="custom-button" onclick="changeCurrentPost(' . $post->getId() . ')">';
                        echo '<img src="../../public/images/comment.png" id="comment">';
                        echo '</button>';
                        echo '</div>';
                        echo '</section>';
                        $firstPost = false;
                  
                }
            } else {
                foreach ($tabPosts as $post) {
                    $postId = $post->getId();
                    $postPdp = findPdpForPost($tabPdp, $postId);
                    echo '<section id="actualite' . $post->getId() . '" class="actu">';
                    echo '<form class="form" method="POST" action="/public/actu/profil">
                    <span class="photo">
                        <img src="'.$postPdp.'" id="pp"> 
                        <span class="auteur">' . $post->getAuteurName() . '</span>
                    </span>
                    <input type="hidden" name="pp" value="' . $postPdp . '">
                    <input type="hidden" name="pseudo" value="' . $post->getAuteurName() . '">
                </form>';
        
                    echo '<div class="titre"><h1>' . $post->getTitre() . '</h1></div>';
                    echo '<div class="contenue"><p>' . $post->getContenu() . '</p></div>';
                    echo '<div class="nbLike"><p>' . $post->getNbLike() . '</p></div>';
                    echo '<div class="like">';
                    echo '<button class="custom-like" onclick="updateLike(' . $post->getId() . ')">';
                    echo '<img src="../../public/images/like.png" id="like">';
                    echo '</button>';
                    echo '</div>';
                    echo '<div class="comment">';
                    echo '<p class="nbCom">' . $post->getNbComment() . '</p>';
                    echo '<button class="custom-button" onclick="changeCurrentPost(' . $post->getId() . ')">';
                    echo '<img src="../../public/images/comment.png" id="comment">';
                    echo '</button>';
                    echo '</div>';
                    echo '</section>';
                }
            }
        ?>

    </main>

    <aside id="profil">
        <div>
            <p id="coin"><?php echo (int)$pointsUser; ?> Sporticoins</p>
        </div>
        <div>
            <button id="buttonpdp"><img id="imagepdp" src="<?php echo $userPdp?>"></button>
            <p><?php echo $_SESSION['nom']?></p>
            <p><?php echo "Rank: " . (int)$userRank; ?></p>
            <p><?php echo "Prono réussi: " . (int)$pronoWin?></p>
            <p>Badge: </p>
            <button id="buttonbadge"><img id="imagebadge" src="<?php echo $userBadge?>"></button>
            <p>Ecusson: </p>
            <button id="buttonecu"><img id="imageecu" src="<?php echo $userEcusson?>"></button>
        </div>
    </aside>
</section>

<!-- Modal Ajouter une actualité -->
<div class="modal" id="modal">
    <div class="modal-inner">
        <h2>Ajouter une actualité</h2>
        <form id="formActu" action="/public/json-actu"  method="POST">
            <label for="titre">Titre</label>
            <input type="text" id="titre" name="titre" placeholder="Titre de l'actualité">
            <label for="contenu">Contenu</label>
            <textarea id="contenu" name="contenu" placeholder="Contenu de l'actualité"></textarea>
            <input id="ajoutActu" type="submit"value="Ajouter"/>
        </form>
        <button id="closeModal">Annuler</button>
    </div>
</div>

<!-- Modal photo de profil -->
<div class="modal" id="modalpdp">
    <div id="modalpdp-inner">
        <h2>Choisissez votre photo de profil:</h2>
        <?php
        foreach($tabIcone as $icone){?>
            <img class="imgpdp" src="images/Icone<?php echo $icone->getId()?>.png">
        <?php }?>    
        <div>   
            <button id="submitpdp">Confirmer</button>
            <button id="closemodalpdp">Annuler</button>
        </div>
    </div>
</div> 

<!-- Modal badge -->
<div class="modal" id="modalbadge">
    <div id="modalbadge-inner">
        <h2>Choisissez votre badge:</h2>
        <?php
        foreach($tabBadge as $badge){?>
            <img class="imgbadge" src="images/Badge<?php echo $badge->getId()?>.png">
        <?php }?>
        <div>
            <button id="submitbadge">Confirmer</button>
            <button id="closemodalbadge">Annuler</button>
        </div>
    </div>
</div> 
<!-- modal ecusson -->
<div class="modal" id="modalecu">
        <div id="modalecu-inner">
            <h2>Choisissez votre ecusson:</h2>
            <?php
            foreach($tabEcusson as $ecusson){?>
                <img class="imgecu" src="images/Ecusson<?php echo $ecusson->getId()?>.png">
            <?php }?>
            <div>
            <button id="submitecu">Confirmer</button>
            <button id="closemodalecu">Annuler</button>
            </div>
        </div>
    </div> 

</body>
</html>
<script src="../../public/js/changeCurrentPost.js"></script>
<script src="../../public/js/actu.js"></script>
<script src="../../public/js/maj_like.js"></script>
<script src="../../public/js/btnAdmin.js"></script>
<script src="../../public/js/switch_fichier_js_actu.js"></script>
<script id="fichier"></script>
<script src="../../public/js/profil.js"></script>
