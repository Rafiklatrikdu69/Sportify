<?php

use \App\Utils;
use \App\Config;

?>

<head>
    <link rel="stylesheet" href="css/accueil_style.css">
    <title>Sportify</title>
</head>

<?php echo $name; ?>

<body>
    <div class="barreMenu">
        <div class="gridTitre">
            <img src="images/logo.png">
            <a>Sportify</a>
        </div>
        <div class="gridProfil">
            <a>Devenez un Sportifyer <b>|</b> </a>
            <div class="profil">
                <img src="images/profil.png">
                <a>Profil</a>
                <div class="arrow-down"></div>
            </div>

        </div>

    </div>

    <div class="accueil">
        <div class="gauche">
            <p>Plongez dans </br> l’expérience ultime des </br> matches en lignes </p>
            <img src="images/logo.png">
        </div>
        <div class="droite">
            <div class="info">
                <a>Rejoignez-nous maintenant !</a>
                </br>
                <p class="cadre">S'inscrire </p>
                </br>
                <p>OU</p>
                </br>
                <a>Vous êtes déja un sportifyer</a>
                </br>
                <p class="cadre">Se connecter</p>
            </div>
        </div>
    </div>
    <button onclick="window.location.href='/public/inscription';" class="form-control btn btn-primary submit px-3" role="button">S'inscrire</button>
    <button onclick="window.location.href='/public/connexion';" class="form-control btn btn-primary submit px-3" role="button">Se connecter</button>

</body>
<footer>
    <p>&copy; Sportify 2023</p>
    <p>Site réalisé dans le cadre de la SAE S3</p>
</footer>