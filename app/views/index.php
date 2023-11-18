<?php

use \App\Utils;
use \App\Config;

?>

<head>
    <link rel="stylesheet" href="css/style.css">
    <title>Sportify</title>
</head>

<?php echo $name;?>
<h1>Sportify</h1>
<main>

            <!-- Partie gauche -->
                <div class="div1">
                    <img src="images/logo.png" alt="logo">
                </div>
            <!-- Partie droite -->
                <div class="div2">
                    <div class="div3">
                        <div class="slogan">
                                <h2>C'est maintenant que ca se passe !</h2>
                        </div>
                    </div>
                    <div class="div4">
                        <p>Rejoignez nous maintenant !</p>

                    <button onclick="window.location.href='/public/inscription';" class="form-control btn btn-primary submit px-3" role="button">S'inscrire</button>

                    </div>
                    <div class="div5">
                        <h2>Ou</h2>
                    </div>
                    <div class="div6">
                        <p>Deja un sportifyer</p>

                        <button onclick="window.location.href='/public/connexion';" class="form-control btn btn-primary submit px-3" role="button">Se connecter</button>

                    </div>
                </div>
        </main>
    <footer>
        <p>&copy; Sportify 2023</p>
        <p>Site réalisé dans le cadre de la SAE S3</p>
    </footer>
