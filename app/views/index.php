<?php

use \App\Utils;
use \App\Config;

?>

<head>
    <link rel="stylesheet" href="css/accueil_style.css">
    <title>Sportify</title>
</head>

<?php echo $name;?>

<body>
    <div class="barreMenu">
        <div class="gridTitre">
            <img class="logo" src="images/logo.png">
            <a>Sportify</a>
        </div>
        <div class="gridProfil">
            <a>Devenez un Sportifyer <b>|</b> </a>
            <a>Profil</a>
        </div>
        
    </div>
    
    <div class="accueil">
        <div class="gauche">
            <a>Plongez-vous dans l’expérience ultime des matches en lignes</a>
        </div>
        <div class="droite">
        </div>
    </div>
    <button onclick="window.location.href='/public/inscription';" class="form-control btn btn-primary submit px-3" role="button">S'inscrire</button>         
    <button onclick="window.location.href='/public/connexion';" class="form-control btn btn-primary submit px-3" role="button">Se connecter</button>

</body>
    <footer>
        <p>&copy; Sportify 2023</p>
        <p>Site réalisé dans le cadre de la SAE S3</p>
    </footer>
