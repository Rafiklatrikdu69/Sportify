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
 <form  action="/public/verification-formulaire-inscription" method="POST" id="my_form" class="forms"> 
    <div class="slideshow-container">
      <div class="mySlides fade">
        <label>Nom d'utilisateur</label>
        <input type="text" id="username" name="username">
      </div>
      <div class="mySlides fade">
        <label> Adresse mail</label>
        <input type="email" id="email" name="email">
      </div>
      <div class="mySlides fade">
        <label>Mot de passe</label>
        <input type="text" id="password" name="password" onInput="check()" >
<div id="val">
        <div id="check0">
            <i class="far fa-check-circle"></i>  <span> Au moins une lettre minuscule.</span>
        </div>
        <div id="check1">
            <i class="far fa-check-circle"></i>  <span>  Au moins une lettre majuscule.</span>
        </div>
        <div id="check2">
            <i class="far fa-check-circle"></i>  <span>  Au moins un chiffre.</span>
        </div>
        <div id="check3">
            <i class="far fa-check-circle"></i>   <span>Au moins un caractère spécial parmi @, $, !, %, *, ?, &.</span>
        </div>
        <div id="check4">
            <i class="far fa-check-circle"></i>  <span>Au moins 8 caractères</span>
        </div>
</div>
        </div>
      </div>
  </form>
    <br>
    <div class="arrow">
      <a class="prev" onclick="plusSlides(-1) "></a>
    </div>
    <div class="arrow-left">
      <a class="next" onclick="plusSlides(1)"></a>
    </div>
  <script src="js/connexion.js"></script>
  <script src="js/check.js" defer></script>
</body>