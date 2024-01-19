<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sportify</title>
    <link rel="stylesheet" href="../../public/css/actu_style.css">
    
</head>
<body>
<?php header::header()?>
<section id="base">
    <aside id="gauche">
        <div id="ajt_actu">
            <button id="openModalActu"></button>
            <button id='backToActu' onclick='changeCurrentPost(0)'>Retour aux actualités</button>


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
        <!-- version dynamique -->
        
<?php 
    if (isset($_SESSION['currpost']) && !empty($_SESSION['currpost']) && $_SESSION['currpost'] != 0) {
        $firstPost = true; // Variable pour suivre le premier élément
        foreach ($tabPosts as $post) {
            if ($firstPost == true) {
                echo '<section id="actualite' . $post->getId() . '" class="actufixed">';
                echo '<div class="photo"><img src="../../public/images/logo.png" id="pp"></div>';
                echo '<div class="auteur"><p>' . $post->getAuteurName() . '</p></div>';
                echo '<div class="titre"><h1>' . $post->getTitre() . '</h1></div>';
                echo '<div class="contenue"><p>' . $post->getContenu() . '</p></div>';
                echo '<div class="nbLike"><p>' . $post->getNbLike() . '</p></div>';
                echo '<div class="like">';
                echo '<button class="custom-like" onclick="updateLike(' . $post->getId() . ')">';
                echo '<img src="../../public/images/like.png" id="like">';
                echo '</button>';
                echo '</div>';
                echo '<div class="comment">';
                echo '<p>' . $post->getNbComment() . '</p>';
                echo '<button class="custom-button" onclick="changeCurrentPost(' . $post->getId() . ')">';
                echo '<img src="../../public/images/comment.png" id="comment">';
                echo '</button>';
                echo '</div>';
                echo '</section>';
                $firstPost = false;
            } else {
                echo '<section id="actualite' . $post->getId() . '" class="com">';
                echo '<div class="photo"><img src="../../public/images/logo.png" id="pp"></div>';
                echo '<div class="auteur"><p>' . $post->getAuteurName() . '</p></div>';
                echo '<div class="titre"><h1>' . $post->getTitre() . '</h1></div>';
                echo '<div class="contenue"><p>' . $post->getContenu() . '</p></div>';
                echo '<div class="nbLike"><p>' . $post->getNbLike() . '</p></div>';
                echo '<div class="like">';
                echo '<button class="custom-like" onclick="updateLike(' . $post->getId() . ')">';
                echo '<img src="../../public/images/like.png" id="like">';
                echo '</button>';
                echo '</div>';
                echo '<div class="comment">';
                echo '<button class="custom-button" onclick="changeCurrentPost(' . $post->getId() . ')">';
                echo '<img src="../../public/images/comment.png" id="comment">';
                echo '</button>';
                echo '</div>';
                echo '</section>';
            }
    }
} else {
    foreach ($tabPosts as $post) {
        echo '<section id="actualite' . $post->getId() . '" class="actu">';
                echo '<div class="photo"><img src="../../public/images/logo.png" id="pp"></div>';
                echo '<div class="auteur"><p>' . $post->getAuteurName() . '</p></div>';
                echo '<div class="titre"><h1>' . $post->getTitre() . '</h1></div>';
                echo '<div class="contenue"><p>' . $post->getContenu() . '</p></div>';
                echo '<div class="nbLike"><p>' . $post->getNbLike() . '</p></div>';
                echo '<div class="like">';
                echo '<button class="custom-like" onclick="updateLike(' . $post->getId() . ')">';
                echo '<img src="../../public/images/like.png" id="like">';
                echo '</button>';
                echo '</div>';
                echo '<div class="comment">';
                echo '<button class="custom-button" onclick="changeCurrentPost(' . $post->getId() . ')">';
                echo '<img src="../../public/images/comment.png" id="comment">';
                echo '</button>';
                echo '</div>';
                echo '</section>';
    }
}
?>

          <!-- Jusqu'ici -->
    </main>
    <aside id="profil">
        <div class="coin" >
            <p id="coin"><?php echo (int)$pointsUser; ?> Sporticoins </p>
            
        </div>
        <div>
            <img src="../../public/images/logo.png">
            <p>Pseudo</p>
            <p>Classement</p>
            <p>Prono réussi</p>
            <p>Badges</p>
            <p>Equipe préférée</p>
        </div>
    </aside>
    
</section>
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
</body>
</html>
<script src="../../public/js/changeCurrentPost.js"></script>
<script src="../../public/js/actu.js"></script>
<script src="../../public/js/maj_like.js"></script>
<script src="../../public/js/btnAdmin.js"></script>
<script src="../../public/js/switch_fichier_js_actu.js"></script>
<script id="fichier"></script>
