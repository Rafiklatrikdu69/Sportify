

<head>
    <link rel="stylesheet" href="css/accueil_style.css">
    <script src="js/accueil.js" defer></script>
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
            <a>Devenez un Sportifyer  <b>|</b> </a>
            <div class="profil" id="btProfil">
                <img id="imageProfil" src="images/profil.png">
                <a id="titreProfil">Profil</a>
                <div id="flecheProfil" class="arrow-down"></div>
            </div>
        </div>
    </div>
    <div class="cadreMenu">
        <div class="arrow"></div>
        <div id="menu" class="menu">
            <a id="menu1"> S'inscrire </a>
            <a id="menu2">Se Connecter </a>
            <?php 
                    if (isset($_SESSION['nom'])) {
                        echo '<script>
                                    document.getElementById("menu2").addEventListener("click", function() {
                                        window.location.href = "/public/actu";
                                    });
                            </script>';
                    }else{
                        echo '<script>
                                    document.getElementById("menu2").addEventListener("click", function() {
                                        window.location.href = "/public/connexion";
                                    });
                        </script>'; 
                    }
                ?>
        </div>
    </div>
    <div class="barreTmp"></div>
    <div class="accueil">
        <div class="gauche">
            <div class="info">
                <div class="cadrage">
                    <a>Plongez dans </br> l’expérience ultime des </br> matches en lignes </a>
                </div>
                <img class="logo" src="images/logo.png">
            </div>
        </div>
        <div class="droite">
            <div class="info">
                <a>Rejoignez-nous maintenant !</a>
                </br>
                <p class="cadre" id="btInscription">S'inscrire </p>
                </br>
                <p>OU</p>
                </br>
                <a>Vous êtes déja un sportifyer</a>
                </br>
                <p class="cadre" id="btConnecter">Se connecter</p>
                <?php 
                    if (isset($_SESSION['nom'])) {
                        echo '<script>
                                    document.getElementById("btConnecter").addEventListener("click", function() {
                                        window.location.href = "/public/actu";
                                    });
                            </script>';
                    }else{
                        echo '<script>
                                    document.getElementById("btConnecter").addEventListener("click", function() {
                                        window.location.href = "/public/connexion";
                                    });
                        </script>'; 
                    }
                ?>
            </div>
        </div>
    </div>
    <div class="ligne"></div>
    <div class="Titre"> <a>Vivez la différence</a></div>
    <div class="ligne"></div>
    <div class="cadreDescriptif">
        <div class="bloc">
            <div class="blocGauche">
                <a>Faites des pronostics et </br> remportez des côtes</a> </br>
                <div class="iconeBloc"></div>
            </div>
            <div class="blocDroite">
                <a> Participez à notre jeu de pronostic et transformez vos prédictions en gains avec nos côtes attractives ! </a>
                <a> Votre intuition peut vous rapporter gros. Faites parler votre flair sportif et maximiser vos gains.</a>
                <a> Participez activement au match grâce à l’art des pronostics. Jouez intelligemment et misez astucieusement pour remporter nos côtes imbattables !</a>
            </div>
        </div>
    </div>
    <div class="ligne2"></div>
    <div class="cadreDescriptif">
    <div class="bloc2">
            <div class="blocGauche2">
                <a>Devenez attentif et ne manquez aucun moment fort grâce à notre file d’actualités mis à jour quotidiennement.</a>
                <a>Participez vous-même à la vie sportive. Partager, liker et commenter de nouvelles actualités.</a>
                <a>Ne ratez plus un seul coup de sifflet. Du suspense, des rebondissements, des records battus. Vibrez au rythme des événements du monde du sport.</a>
            </div>
            <div class="blocDroite2">
                <a> Restez branché aux </br> actualités sportives  </a> </br>
                <div class="iconeBloc"></div>
            </div>
        </div>
    </div>
    <div class="ligne2"></div>
    <div class="cadreDescriptif">
    <div class="bloc">
            <div class="blocGauche">
                <a> Jouez à notre </br> Mini-Jeu  </a> </br>
                <div class="iconeBloc"></div>
            </div>
            <div class="blocDroite">
                <a>Plongez dans notre mini-jeu style Doodle Jump dédié au sport et atteignez de nouveaux sommets. </a>
                <a>Lancez-vous dans une aventure verticale unique en défiant la gravité. Sautez, grimpez, marquez, et levez-vous vers la victoire. </a>
                <a>Prouver que vous êtes le maître de l’ascension. Sautez vers de nouveaux records et obtenez de plus en plus de pièces. Sautez plus haut, gagnez plus gros !</a>
            </div>
        </div>
    </div>
    <div class="ligne2"></div>
    <div class="cadreDescriptif">
    <div class="bloc2">
            <div class="blocGauche2">
                <a>Transformez votre expérience en ligne avec des achats personnalisés dans notre boutique exclusive. </a>
                <a>Exprimez votre style unique en personnalisant votre compte avec nos articles tendances. Votre style, vos règles.</a>
                <a>Dépenser vos points gagnés afin de faire de votre compte un chef-d'œuvre personnel. Parcourez la boutique à la recherche de ce qui vous manque. Élevez votre style !</a>
            </div>
            <div class="blocDroite2">
                <a> Faites des achats dans </br> notre boutique </a> </br>
                <div class="iconeBloc"></div>
            </div>
        </div>
    </div>
    <div class="ligne"></div>
    <div class="Titre"> <a>Explorez notre site dès maintenant !</a></div>
    <div class="ligne"></div>

    <div class="fin">
        <footer>
            <a>&copy; Sportify 2023</a> </br>
            <a>Site réalisé dans le cadre de la SAE S3</a>
        </footer>
        <div class="cadrageFleche">
            <img id ="flecheFin" src="images/fleche.png">
        </div>
        <div class="finDroite">
            <a> Sportify </a>
            <img src="images/logo.png">
        </div>
    </div>
</body>