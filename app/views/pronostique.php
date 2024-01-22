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
    <h2 id="h2">Historique des pronostics</h2>
    <div class="scrollable-container">
        <?php
        echo '<table>';
        echo '<thead>';
        echo '<tr>';
        echo '<th>Equipe gagnante</th>';
        echo '<th>Equipe perdante</th>';
        echo '<th>Cote</th>';
        echo '<th>Mise</th>';
        echo '</tr>';
        echo '</thead>';
        echo '<tbody>';

        if (empty($tableauProno)) {
            echo '<tr>';
            echo '<td colspan="5">Vous n\'avez pas encore parié</td>';
            echo '</tr>';
        }
        foreach ($tableauProno as $prono) {
            $lastProno = $prono;
            echo '<tr>';
            echo '<td>' . $prono->getEquipeConcernee() . '</td>';
            echo '<td>' . $prono->getEquipePerdante() . '</td>';
            echo '<td>' . $prono->getCote() . '</td>';
            echo '<td>' . $prono->getMise() . '</td>';
            echo '</tr>';
        }

        echo '</tbody>';
        echo '</table>';
        ?>
        


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
    </div>

    
</div>
        </aside>
        <main>
            <!-- la section avec les pronostics est ici -->
            
        </main>
        

    <div class="modal" id="modal">
        <div class="modal-inner">
                <h2>Confirmation</h2>
                <p>Êtes-vous sûr de vouloir parier sur ce match ?</p>
                <p id="match_joue"></p>
                <p>Vous avez choisi la cote <span id="cote_joue"></span></p>
                <p class="match-deja-jouer" id="resultat">Vous avez deja parier sur ce match</p>
                <form id="pariForm">
                    <input type="number" name="mise" id="mise" placeholder="0" min="1">
                    <input id="valider" type="submit" value="Valider">
                </form>
                <p id="gain">Votre gain potentiel est de : </p>
                <button id="closeModal">Annuler</button>
        </div>
    </div>
    <div class="modal" id="modalR">
        <div class="modal-innerR">
                <h2 id="DailyReward"><?php echo $lastConnection; ?></h2>
                <button id="closeModalR">Fermer</button>
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
    
</body>
</html>
<script src="../../public/js/prono.js"></script>
<script src="../../public/js/popup.js"></script>
<script src="../../public/js/daily_reward.js"></script>
<script src="../../public/js/profil.js"></script>
