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
                    <input type="radio" name="categorie" value="Badge" class="dispo">Badge<br>
                    <input type="radio" name="categorie" value="Icone"  class="dispo">Icone<br>
                    <input type="radio" name="categorie" value="Ecusson"  class="dispo">Ecusson<br>
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
                    <!-- <legend>Disponibilité</legend>
                    <input type="radio" name="dispo" value="possédé" class="dispo">Possédé<br>
                    <input type="radio" name="dispo" value="pas possédé" class="dispo">Non possédé<br>
                        -->
                </fieldset>
                <script src="../../public/js/prix.js"></script>
            </form>
        </aside>

        <section id="articles">

       


           

        </section>

      
        <aside id="profil">
            <div class="coin">
            <p id="coin"><?php echo (int)$pointsUser; ?> Sporticoins</p>
            </div>
            <div>
                <button id="buttonpdp"><img id="imagepdp" src="<?php echo $userPdp?>"></button>
                <p><?php echo $_SESSION['nom']?></p>
                <p><?php echo "Rank: " . (int)$userRank; ?></p>
                <p><?php echo "Prono réussi: " . (int)$pronoWin?></p>
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


    <div id="modalpdp">
        <div id="modalpdp-inner">
            <h2>Choisissez votre photo de profil:</h2>
            <?php
            foreach($tabItemsOwned as $item){?>
                <img class="imgpdp" src="images/img<?php echo $item->getId()?>.jpg">
            <?php }?>
            <button id="submitpdp">Confirmer</button>
            <button id="closemodalpdp">Annuler</button>
        </div>
    </div> 

    <script src="../../public/js/btnAdmin.js"></script>
    <script src="../../public/js/store.js"></script>
</body>




