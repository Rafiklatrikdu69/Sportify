<?php

session_start();
// // Récupérer la nouvelle valeur à partir des paramètres de la requête
$nouvelleValeur = isset($_GET['valeur']) ? $_GET['valeur'] : '';



$nouvelleValeur = $_GET['valeur'];
$_SESSION['currpost'] = $nouvelleValeur;
echo $_SESSION['currpost'];
echo "Hello World" . $nouvelleValeur;

?>
