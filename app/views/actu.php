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
                    <tr><th colspan="3">CLassement</th></tr>
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
            foreach($tabPosts as $post){?>
            <!-- <section id="post<?php //$post->getId()?>" class="Actu"> -->
            <section id="actualite" class="Actu">
                <div class="photo"><img src="../../public/images/logo.png" id="pp"></div>
                <div class="auteur"><p><?php echo $post->getAuteurName()?> </p></div>
                <div class="titre"><h1><?php echo $post->getTitre()?></h1></div>
                <div class="contenue"><p><?php echo $post->getContenu()?></p></div>
                <div class="like"><button class="custom-like" onclick="updateLike(<?php echo $post->getId()?>)"><img src="../../public/images/like.png" id="like"></button></div>
                <div class="comment"><button class="custom-button" onclick="changeCurrentPost(<?php echo $post->getId()?>)"><img src="../../public/images/comment.png" id="comment"></button></div>
            </section>
        <?php }?>
          <!-- Jusqu'ici -->
    </main>
    <aside id="profil">
        <div>
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

<script src="../../public/js/switch_fichier_js_actu.js"></script>
<script id="fichier"></script>
