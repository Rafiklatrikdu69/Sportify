<?php

use \App\Utils;
use \App\Config;

?>

<head>
    <link rel="stylesheet" href="css/styleinscription.css">
    <title>Sportify</title>
</head>


<body>
  <div class="div1">
    <img src="images/logo.png" alt="running">
    <div id="title">Sportify</div>
  </div>
  <div class="slideshow-container">

    <div class="mySlides fade">
      <div class="flex-input">
      <label>Nom d'utilisateur</label>
      <input type="text">
      </div>
    </div>

    <div class="mySlides fade">

      <label> Adresse mail</label>
      <input type="email">

    </div>

    <div class="mySlides fade">

      <label>Mot de passe</label>
      <input type="text">

    </div>

    

  </div>
  <div></div>
    <!-- <div></div> -->
  <br>
  <div class="arrow">
  <a class="prev" onclick="plusSlides(-1)"></a>
  </div>
  <div class="arrow-left">
  <a class="next" onclick="plusSlides(1)"></a>
  </div>



  <script src="js/index.js"></script>

</body>

