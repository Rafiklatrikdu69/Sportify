<?php
class header{  


        static function header(){
                echo '<header>
                <a id="accueil" href="/public/actualite"><img src="../public/images/logo.png"></a>
                <a id="actu" href="/public/actualite">Actu</a>
                <a id="prono" href="/public/pronostique">Prono</a>
                <a id="boutique" href="/public/boutique">Boutique</a>
                <a id="deconnexion" href="/public/deconnexion">Déconnexion</a>
        </header>';
        }


}