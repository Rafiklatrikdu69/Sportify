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
        <aside id="liste_prono">
        <div id="Tablo">
    <h2>Historique des pronostics</h2>
    <div class="scrollable-container">
        <?php
        echo '<table>';
        echo '<thead>';
        echo '<tr>';
        echo '<th>Equipe gagnante</th>';
        echo '<th>Equipe perdante</th>';
        echo '<th>Date</th>';
        echo '<th>Cote</th>';
        echo '<th>Mise</th>';
        echo '</tr>';
        echo '</thead>';
        echo '<tbody>';
        $lastProno = null;

        foreach ($tableauProno as $prono) {
            $lastProno = $prono;
            echo '<tr>';
            echo '<td>' . $prono->getEquipeConcernee() . '</td>';
            echo '<td>' . $prono->getEquipePerdante() . '</td>';
            echo '<td>' . $prono->getDate() . '</td>';
            echo '<td>' . $prono->getCote() . '</td>';
            echo '<td>' . $prono->getMise() . '</td>';
            echo '</tr>';
        }

        echo '</tbody>';
        echo '</table>';
        ?>
    </div>
</div>
        </aside>
        <main>
            <!-- la section avec les pronostics est ici -->
            
        </main>
    <aside id="profil">
            <div>
                <p id="coin"><?php echo (int)$pointsUser; ?> Sporticoins</p>
            </div>
            <div>
                <img src="images/logo.png">
                <p>Pseudo</p>
                <p>Classement</p>
                <p>Prono réussi</p>
                <p>Badges</p>
                <p>Equipe préférée</p>
            </div>
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