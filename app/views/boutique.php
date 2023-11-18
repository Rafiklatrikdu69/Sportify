<?php

use \App\Utils;
use \App\Config;

?>

<head>
    <link rel="stylesheet" href="css/storestyle.css">
    <title>Sportify</title>
</head>
<body>
    <header>
        <a id="accueil" href="actu.html"><img src="images/logo.png"></a>
        <a id="actu" href="">Actu</a>
        <a id="prono" href="">Prono</a>
        <a id="boutique" href="">Boutique</a>
        <a id="deconnexion" href="">Déconnexion</a>
    </header>

    <section id="corps">
        <aside id="categorie">
            <form>
                <fieldset>
                    <legend>Catégories</legend>
                    <input type="checkbox" name="categorie" value="tshirt">T-shirt<br>
                    <input type="checkbox" name="categorie" value="pull">Pull<br>
                    <input type="checkbox" name="categorie" value="casquette">Casquette<br>
                    <input type="checkbox" name="categorie" value="short">Short<br>
                    <input type="checkbox" name="categorie" value="pantalon">Pantalon<br>
                    <input type="checkbox" name="categorie" value="chaussure">Chaussure<br>
                    <input type="submit" value="Filtrer">
                </fieldset>
            </form>
        </aside>

        <section id="articles">
        </section>
        
        <aside id="options">
        </aside>
    </section>
</body>

