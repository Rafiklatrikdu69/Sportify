<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="style.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Pixelify+Sans&display=swap">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap">
    <script src="Model/Dimension.js" defer></script>
    <script src="Model/Tutoriel.js" defer></script>
    <script src="Controleur/ActionTableauScore.js" defer></script>
    <script src="TableauScore/Main.js" defer></script>

    <title>SportyJump_Menu</title>
</head>

<body>

    <header>
        <a id="accueil" href="/public/actualite"><img src="logo.png"></a>
        <a id="actu" href="/public/actualite">Actu</a>
        <a id="prono" href="/public/pronostique">Prono</a>
        <a id="boutique" href="/public/boutique">Boutique</a>
        <a id="jeu" href="/public/boutique">Mini-Jeu</a>
        <a id="deconnexion" href="/public/deconnexion">Déconnexion</a>
    </header>

    <div class="interfaceJeu">
        <p class="titreTableauScore">- Tableau des Scores -</p>
        
        <?php
            require("TableauScore/TableauBD.php"); 
            $tab = test(); 
            echo '<table class="tableauScore">
            <tr class="ligne0">
                <td> RANG </td>
                <td> SCORE </td>
                <td> PSEUDO</td>
            </tr>
            <tr class="ligne1">
                <td> 1ST </td>
                <td>'. $tab[0][0] .'</td>
                <td>'. $tab[0][1] .'</td>
            </tr>
            <tr class="ligne2">
                <td> 2ND </td>
                <td>'. $tab[1][0] .'</td>
                <td>'. $tab[1][1] .'</td>
            </tr>
            <tr class="ligne3">
                <td> 3RD </td>
                <td>'. $tab[2][0] .'</td>
                <td>'. $tab[2][1] .'</td>
            </tr>
            <tr class="ligne4">
                <td> 4TH </td>
                <td>'. $tab[3][0] .'</td>
                <td>'. $tab[3][1] .'</td>
            </tr>
            <tr class="ligne5">
                <td> 5TH </td>
                <td>'. $tab[4][0] .'</td>
                <td>'. $tab[4][1] .'</td>
            </tr>
            <tr class="ligne6">
                <td> 6TH </td>
                <td>'. $tab[5][0] .'</td>
                <td>'. $tab[5][1] .'</td>
            </tr>
            <tr class="ligne7">
                <td> 7TH </td>
                <td>'. $tab[6][0] .'</td>
                <td>'. $tab[6][1] .'</td>
            </tr>
            <tr class="ligne8">
                <td> 8TH </td>
                <td>'. $tab[7][0] .'</td>
                <td>'. $tab[7][1] .'</td>
            </tr>
            <tr class="ligne3">
                <td> 9TH </td>
                <td>'. $tab[8][0] .'</td>
                <td>'. $tab[8][1] .'</td>
            </tr>
            <tr class="ligne10">
                <td> 10TH </td>
                <td>'. $tab[9][0] .'</td>
                <td>'. $tab[9][1] .'</td>
            </tr>
        </table>'
        ?>
        <p id="boutonMenu" class="boutonMenu"> Retour au Menu </p>
    </div>

    <div class="tuto" id="tuto">
        <div class="circle" id="circle">
            <div class="question-mark" id="point">?</div>
        </div>
        <div class="rectangle" id="rectangle">
            <div class="tutoType">
                <div class="tutoMenu"></div>
                <div class="tutoGamePlay"></div>
                <div class="tutoPiece"></div>
                <div class="tutoMonstre"></div>
                <div class="tutoObject"></div>
            </div>
            <div class="cercle_Tuto"></div>
            <div class="fleche"></div>
        </div>
    </div>
</body>

</html>