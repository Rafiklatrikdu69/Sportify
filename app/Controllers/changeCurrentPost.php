<?php

session_start();
// // Récupérer la nouvelle valeur à partir des paramètres de la requête
$nouvelleValeur = isset($_GET['valeur']) ? $_GET['valeur'] : '';

// // Mettre à jour la variable de session avec la nouvelle valeur


// // Configuration pour afficher toutes les erreurs (à des fins de débogage)
// error_reporting(E_ALL);
// ini_set('display_errors', 1);

// // Enregistrez un message de débogage
// error_log('Nouvelle valeur de session : ' . $nouvelleValeur);

// // Répondez avec un message simple
// $response = "La valeur de session a été mise à jour avec : $nouvelleValeur";

// // Enregistrez également la réponse dans les logs du serveur
// error_log('Réponse du serveur : ' . $response);

// echo $response;


$nouvelleValeur = $_GET['valeur'];
$_SESSION['currpost'] = $nouvelleValeur;
echo $_SESSION['currpost'];
echo "Hello World" . $nouvelleValeur;

?>
