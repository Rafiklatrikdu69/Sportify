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
    <div id="base">
    <aside>
        <button id="openModal"> Actualité</button>
        <aside id="categorie">
            <form>
                <fieldset>
                    <legend>Catégories</legend>
                    <input type="checkbox" name="categorie" value="foot">Football<br>
                    <input type="checkbox" name="categorie" value="basketball">Basketball<br>
                    <input type="checkbox" name="categorie" value="rugby">Rugby<br>
                    <input type="checkbox" name="categorie" value="boxe">Boxe<br>
                    <input type="checkbox" name="categorie" value="tennis">Tennis<br>
                    <input type="submit" value="Filtrer">
                </fieldset>
            </form>
        </aside>
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
    <div class="modal" id="modal">
        <div class="modal-inner">
                <form>
                    <fieldset>
                        <legend>Ajouter une actualité</legend>
                        <label for="titre">Titre</label>
                        <input type="text" name="titre" id="titre"  required>
                        <br>
                        <label for="contenue">Contenue</label>
                        <textarea name="contenue" id="contenue" cols="30" rows="10"  required></textarea>
                        <input type="submit" value="Ajouter">
                    </fieldset>
                </form>
                <button id="closeModal">Annuler</button>
        </div>
    </div>
</div>
</body>
</html>
<script src="../../public/js/actu.js"></script>
<script src="../../public/js/ajt_actu.js"></script>