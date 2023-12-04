<?php

use \App\Utils;
use \App\Config;

?>

<head>
    <link rel="stylesheet" href="css/boutique_style.css">
    <title>Sportify</title>
    
</head>
<body>
<?php header::header()?>

    <section id="corps">
        <aside id="categorie">
            <form>
                <fieldset>
                    <legend>Filtres</legend>
                    <legend>Types d'item</legend>
                    <input type="radio" name="categorie" value="icone">Icône<br>
                    <input type="radio" name="categorie" value="fond">Fond<br>
                    <input type="radio" name="categorie" value="badges">Badges<br>
                    <input type="radio" name="categorie" value="badges">Style nom<br>
                    <legend>Couleur</legend>
                    <select id="couleur">
                        <option value="">Aucune</option>
                        <option value="red">Rouge</option>
                        <option value="green">Vert</option>
                        <option value="blue">Bleu</option>
                        <option value="black">Noir</option>
                        <option value=white>Blanc</option>
                    </select>
                    <legend>Prix max</legend>
                    <div class="range-wrap">
                        <input type="range" class="range" min="10" max="500" step="10">
                        <output class="bubble"></output>
                    </div><br>
                    <legend>Disponibilité</legend>
                    <input type="radio" name="dispo" value="possédé">Possédé<br>
                    <input type="radio" name="dispo" value="possédé">Non possédé<br>
                       
                </fieldset>
                <script src="../../public/js/prix.js"></script>
            </form>
        </aside>

        <section id="articles">

        <?php
            foreach($tabItems as $item){?>
            <div class="card">
                <!-- src image = img[item_id].jpg -->
                <img src="images/img<?php echo $item->getId()?>.jpg">
                <h1 class="nom" id="<?php echo $item->getId()?>"><?php echo $item->getName()?></h1>
                <p class="price" id="<?php echo $item->getPrice()?>"><?php echo $item->getPrice()?> points</p>
                <p><?php echo $item->getDescription()?></p>
                <p><button id="achat">Acheter</button></p>
            </div>
            <?php }?>


            <!-- <div class="card">
                <img src="images/logo.png">
                <h1>T-shirt Fornite</h1>
                <p class="price">120 points</p>
                <p>Le skin t-shirt plus apprécié des utilisateurs</p>
                <p><button>Acheter</button></p>
            </div>  -->

        </section>
        
        <aside id="profil">
            <div>
            <p id="coin"><?php echo $pointsUser; ?> Sporticoins</p>
            </div>
            <div>
                <img src="images/logo.png">
                <p><?php echo $_SESSION['nom']?></p>
                <p>Classement</p>
                <p>Prono réussi</p>
                <p>Badges</p>
                <p>Equipe préférée</p>
            </div>
        </aside>
    </section>

    <div class="modal" id="modal">
        <div class="modal-inner">
            <h2>Confirmation d'achat</h2>
            <p>Voulez-vous acheter l'article <span id="itemToBuy"></span> ?</p>
            <button id="confirmPurchase">Confirmer</button>
            <button id="closeModal">Annuler</button>
        </div>
    </div>

    
    <script src="../../public/js/store.js"></script>
</body>




