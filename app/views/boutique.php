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
                    <legend>Types d'item</legend>
                    <input type="checkbox" name="categorie" value="tshirt">T-shirt<br>
                    <input type="checkbox" name="categorie" value="pull">Pull<br>
                    <input type="checkbox" name="categorie" value="casquette">Casquette<br>
                    <input type="checkbox" name="categorie" value="short">Short<br>
                    <input type="checkbox" name="categorie" value="pantalon">Pantalon<br>
                    <input type="checkbox" name="categorie" value="chaussure">Chaussure<br>
                    <legend>Prix max</legend>
                    <div class="range-wrap">
                    <input type="range" class="range" min="20" max="940">
                    <output class="bubble"></output>
                    </div><br>
                       
                </fieldset>
                <script src="../../public/js/prix.js"></script>
            </form>
        </aside>

        <section id="articles">
            <div class="card">
                <img src="images/tshirt.png">
                <h1>T-shirt Fornite</h1>
                <p class="price">120 points</p>
                <p>Le skin t-shirt plus apprécié des utilisateurs</p>
                <p><button>Acheter</button></p>
            </div> 

            <div class="card">
                <img src="images/tshirt.png">
                <h1>T-shirt Fornite</h1>
                <p class="price">120 points</p>
                <p>Le skin t-shirt plus apprécié des utilisateurs</p>
                <p><button>Acheter</button></p>
            </div> 

            <div class="card">
                <img src="images/tshirt.png">
                <h1>T-shirt Fornite</h1>
                <p class="price">120 points</p>
                <p>Le skin t-shirt plus apprécié des utilisateurs</p>
                <p><button>Acheter</button></p>
            </div> 

            <div class="card">
                <img src="images/tshirt.png">
                <h1>T-shirt Fornite</h1>
                <p class="price">120 points</p>
                <p>Le skin t-shirt plus apprécié des utilisateurs</p>
                <p><button>Acheter</button></p>
            </div> 
        </section>
        
        <aside id="options">
            <div>
                <p>120 Sportycoins</p>
            </div>
            <div>
                <img src="images/tshirt.png">
                <p>Pseudo</p>
                <p>Classement</p>
                <p>Prono réussi</p>
                <p>Badges</p>
                <p>Equipe préférée</p>
            </div>
        </aside>
    </section>
    <script src="../../public/js/store.js"></script>
</body>

