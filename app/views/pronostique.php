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
    <header>
        <a id="accueil" href="actu.html"><img src="../../public/images/logo.png"></a>
        <a id="actu" href="">Actu</a>
        <a id="prono" href="">Prono</a>
        <a id="boutique" href="">Boutique</a>
        <a id="deconnexion" href="">Déconnexion</a>
    </header>
    <div id="base">
    <aside>
        <button> Actualité</button>
        <aside id="categorie">
            <form>
                <fieldset>
                    <legend>Catégories</legend>
                    <input type="checkbox" name="categorie" value="foot">Football<br>
                    <input type="checkbox" name="categorie" value="basketball">Basketball<br>
                    <input type="checkbox" name="categorie" value="rugby">Rugby<br>
                    <input type="checkbox" name="categorie" value="boxe">Boxe<br>
                    <input type="checkbox" name="categorie" value="tennis">Tennis<br>
                    <input type="submit" value="Filtrer">
                </fieldset>
            </form>
        </aside>
    </aside>
    <main>
            <!--TODO: Millieu de page a actualiser avec BD -->
    <?php 
             foreach($tableau as $evenement){?>
<section id='prono_ev'>
         <div class='div1'>
             <img src='../../public/images/football.svg' id='image_sport'>
         </div>
         <div class='div2'>
             <p><?php  echo $evenement["EQUIPE_DOMICILE"]. " - " .$evenement["EQUIPE_EXTERIEUR"] ?></p>
             <p><?php echo $evenement["NOM_EVENEMENT"] ?></p>
             <p><?php echo $evenement["CAT_SPORT"]?></p>
             <p><?php  echo $evenement["DATE_EVENEMENT"]?></p>
         </div>
         <div class='div3'>
             <button><?php  echo $evenement["COTE_DOMICILE"] ?></button>
         </div>
         <div class='div4'>
             <button><?php  echo $evenement["COTE_EXTERIEUR"]?></button>
        </div>
    
    </section>

            <?php }?>
            
    </main>
    <aside>
        <input type="text" placeholder="Rechercher">
        <a>100 Sporticoin</a>
    </aside>
</div>
</body>
</html>
<script src="../../public/js/prono.js"></script>


