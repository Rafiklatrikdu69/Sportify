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
          
                <fieldset>
                    <legend>Filtres</legend>
                    <legend>Types d'item</legend>
                    <input type="checkbox" name="categorie" value="Badge" class="dispo">Badge<br>
                    <input type="checkbox" name="categorie" value="Icone"  class="dispo">Icone<br>
                    <input type="checkbox" name="categorie" value="Ecusson"  class="dispo">Ecusson<br>
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
                        <!-- prix de base au max, soit 500 -->
                        <input type="range" class="range" min="0" max="500" step="25" value="500">
                        <output class="bubble"></output>
                    </div><br>
                    <!-- <legend>Disponibilité</legend>
                    <input type="radio" name="dispo" value="possédé" class="dispo">Possédé<br>
                    <input type="radio" name="dispo" value="pas possédé" class="dispo">Non possédé<br>
                        -->
                        <button id="reboot">Reinitialiser</button>
                    </fieldset>
               
                <script src="../../public/js/prix.js"></script>
        
        </aside>

        <section id="articles">

       


           

        </section>

      
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

    <div class="modal" id="modal">
        <div class="modal-inner">
            <h2>Confirmation d'achat</h2>
            <p>Voulez-vous acheter l'article <span id="itemToBuy"></span> ?</p>
            <button id="confirmPurchase">Confirmer</button>
            <button id="closeModal">Annuler</button>
        </div>
    </div>

    <!-- moddal photo de profil -->
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

    <!-- modal badge -->
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


    <!-- modal pour achat réussi -->
    <div class="modal" id="modalachatreussi">
        <div id="modalachatreussi-inner">
            <h2>Achat réussi !</h2>
            <p>Vous avez acheté l'article <span id="itemToBuy2"></span></p>
            <button id="closemodalachatreussi">Fermer</button>
        </div>
    </div>

    <!-- modal point insuffisant -->
    <div class="modal" id="modalpointinsuffisant">
        <div id="modalpointinsuffisant-inner">
            <h2>Points insuffisants !</h2>
            <p>Vous n'avez pas assez de points pour acheter cet article</p>
            <button id="closemodalpointinsuffisant">Fermer</button>
        </div>
    </div>
    
    <script src="../../public/js/store.js"></script>
    <script src="../../public/js/profil.js"></script>
</body>
