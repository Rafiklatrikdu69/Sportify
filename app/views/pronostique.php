<?php

use \App\Utils;
use \App\Config;

?>


<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sportify</title>
    <link rel="stylesheet" href="../../public/css/pronostique_style.css">
    
</head>
<body>


    
    <?php header::header()?>
    <div id="base">
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
                        <option value="dog">Rouge</option>
                        <option value="cat">Vert</option>
                        <option value="hamster">Bleu</option>
                        <option value="parrot">Noir</option>
                        <option value="spider">Blanc</option>
                    </select>
                    <br>
                    <legend>Disponibilité</legend>
                    <input type="radio" name="dispo" value="possédé">Possédé<br>
                    <input type="radio" name="dispo" value="possédé">Non possédé<br>
                       
                </fieldset>
            </form>
        </aside>
        <main>
            <!--TODO: Millieu de page a actualiser avec BD -->
            <!-- la section avec les pronostics est ici -->
            
    </main>
    <aside id="profil">
        <input type="text" placeholder="Rechercher">
        <a>100 Sporticoin</a>
    </aside>
    </div>
    <div class="modal" id="modal">
        <div class="modal-inner">
                <h2>Confirmation</h2>
                <p>Êtes-vous sûr de vouloir parier sur ce match ?</p>
                <p id="match_joue"></p>
                <p>Vous avez choisi la cote <span id="cote_joue"></span></p>
                <p class="match-deja-jouer" id="resultat">Vous avez deja parier sur ce match</p>
                <form id="pariForm">
                    <input type="number" name="mise" id="mise" placeholder="0">
                    <input type="submit" value="Valider">
                </form>
                <p id="gain">Votre gain potentiel est de : </p>
                <button id="closeModal">Annuler</button>
        </div>
    </div>
                
    </div>
</body>
</html>
<script src="../../public/js/prono.js"></script>
<script src="../../public/js/popup.js"></script>