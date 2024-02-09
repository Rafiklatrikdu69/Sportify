<?php

use \App\Utils;
use \App\Config;

?>

<head>
    <link rel="stylesheet" href="css/inscription_style.css">
    <title>Sportify</title>
    
</head>
<body>

  <div class="div1">
    <img src="images/logo.png" alt="running">
  <div id="title">Sportify</div>
  </div>
      <div class="div2">
      <div class="slideshow-container">
      <div class="mySlides fade">
      <form action="/public/verification-formulaire-inscription" method="POST" class="froms">
      <div id="us">
        <div id="corps">
        <label>Nom d'utilisateur</label>
        <input type="text" id="username" name="username" onInput="check2()">
        </div>
        <div id="val">
        <div id="check5" class="check">
                <i class="far fa-check-circle"></i>  <span> Au moins 3 caractères. ❌</span>
            </div>
            </div>
            </div>
      </div>

      <div class="mySlides fade">
      <div id="em">
      <div id="corps">
        <label> Adresse mail</label>
        <input type="email" id="email" name="email" onInput="check3()">
        </div>
        <div id="val">
        <div id="check6" class="check">
                <i class="far fa-check-circle"></i>  <span> Votre email est valide. ❌</span>
            </div>
        </div>
        </div>
      </div>
      <div class="mySlides fade">
      <div id="md">
      <div id="corps">
        <label>Mot de passe</label>
        <div>
        <input type="password" id="password" name="password" onInput="check()" >
        <img src="images/eye.png" alt="eye" id="eye" onclick="show()">
        </div>
        </div>
        </form>
        <div id="val">
        <div id="check0" class="check">
                <i class="far fa-check-circle"></i>  <span> Au moins une lettre minuscule. ❌</span>
            </div>
            <div id="check1" class="check">
                <i class="far fa-check-circle"></i>  <span>  Au moins une lettre majuscule. ❌</span>
            </div>
            <div id="check2" class="check">
                <i class="far fa-check-circle"></i>  <span>  Au moins un chiffre. ❌</span>
            </div>
            <div id="check3" class="check">
                <i class="far fa-check-circle"></i>   <span>Au moins un caractère spécial parmi @, $, !, %, *, ?, &. ❌</span>
            </div>
            <div id="check4" class="check">
                <i class="far fa-check-circle"></i>  <span>Au moins 8 caractères. ❌</span>
            </div>
          </div>
          </div>
      </div>
      </div> 
          </div>
    <br>
    <div class="div3">
    <div class="arrow">
    <img src="images/test.png" alt="arrow" onclick="plusSlides(-1)" id="right">
    <!-- <input   src="images/test.png" type="submit" value="Envoyer" onclick="plusSlides(-1)" id="right"> -->
    </div>
    </div>
    <!-- <div class="arrow"> -->
    <!-- <input type="submit" value="Envoyer" onclick="plusSlides(-1)" id="right"> -->
      <!-- <img src="images/test.png" alt="arrow" onclick="plusSlides(-1)" id="right">
    </div> -->
    </div>  
    <div class="div1">
    <div class="arrow-left">

      <img src="../public/images/left.png" alt="arrow" onclick="plusSlides(1)" id="left">
    </div>
    
    </div>
  <script src="js/connexion.js"></script>
  <script src="js/check.js" defer></script>
</body>