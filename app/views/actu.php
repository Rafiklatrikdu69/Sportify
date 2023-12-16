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
            <button id="openModalActu">Ajouter une actualité</button>
        </div>
        <div id="classement">
            <div>
                <?php
                $i = 1;
                echo '<table>';
                echo '<tr><th>Classement</th></tr>';
                foreach($tabClassement as $user){
                    echo '<tr><td>'.$i.'</td>';
                    echo '<td>'.$user->getPseudo(). '-' .$user->getPointClassement().'</td></tr>';
                    $i++;
                }
                echo '</table>';
                ?>
            </div>
        </div>
    </aside>
    <main>
        <!-- Pattern a répeter -->
        <section id="actualite" class="Actu">
            <div class="photo"><img src="../../public/images/logo.png" id="pp"></div>
            <div class="auteur"><p>Keap - 03/12/2023 </p></div>
            <div class="titre"><h1>Actu transfère !</h1></div>
            <div class="contenue"><p>Le jeune joueur du FC Barcelone Ansu Fati actuellement préter a Brighton est sur le point d'etre transfere definitivement ezffezfdzefezfzefzefzefzef z feezf zef zef zef zef zef zefze fzef zefze fzefze</p></div>
            <div class="like"><img src="../../public/images/like.png" id="like"></div>
            <div class="comment"><img src="../../public/images/comment.png" id="comment"></div>
        </section>

        <!-- version dinamique -->
        <?php
            foreach($tabPosts as $post){?>
            <!-- <section id="post<?php //$post->getId()?>" class="Actu"> -->
            <section id="actualite" class="Actu">
                <div class="photo"><img src="../../public/images/logo.png" id="pp"></div>
                <div class="auteur"><p><?php echo $post->getAuteurName()?> </p></div>
                <div class="titre"><h1><?php echo $post->getTitre()?></h1></div>
                <div class="contenue"><p><?php echo $post->getContenu()?></p></div>
                <div class="like"><img src="../../public/images/like.png" id="like"></div>
                <div class="comment"><img src="../../public/images/comment.png" id="comment"></div>
            </section>
        <?php }?>
          <!-- Jusqu'ici -->
    </main>
    <aside id="profil">
        <div>
            <p>120 Sportycoins</p>
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
            <form id="formActu">
                <label for="titre">Titre</label>
                <input type="text" id="titre" name="titre" placeholder="Titre de l'actualité">
                <label for="contenu">Contenu</label>
                <textarea id="contenu" name="contenu" placeholder="Contenu de l'actualité"></textarea>
                <button id="ajoutActu">Ajouter</button>
            </form>
                <button id="closeModal">Annuler</button>
        </div>
    </div>
</body>
</html>
<script src="../../public/js/actu.js"></script>
<script src="../../public/js/ajt_actu.js"></script>