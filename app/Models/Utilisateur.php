<?php

class Utilisateur {
    private $utilisateur_id;
    private $pseudo;
    private $email;
    private $mot_de_passe;
    private $point_actuel;
    private $point_classement;
    private $status;
    private $score_jeu;

    function __construct($id, $pseudo, $email, $motDePasse, $pointActuel, $pointClassement, $status, $scoreJeu) {
        $this->utilisateur_id = $id;
        $this->pseudo = $pseudo;
        $this->email = $email;
        $this->mot_de_passe = $motDePasse;
        $this->point_actuel = $pointActuel;
        $this->point_classement = $pointClassement;
        $this->status = $status;
        $this->score_jeu = $scoreJeu;
    }

    function getUtilisateurId() {
        return $this->utilisateur_id;
    }

    function setUtilisateurId($id) {
        $this->utilisateur_id = $id;
    }

    function getPseudo() {
        return $this->pseudo;
    }

    function setPseudo($pseudo) {
        $this->pseudo = $pseudo;
    }

    function getEmail() {
        return $this->email;
    }

    function setEmail($email) {
        $this->email = $email;
    }

    function getMotDePasse() {
        return $this->mot_de_passe;
    }

    function setMotDePasse($motDePasse) {
        $this->mot_de_passe = $motDePasse;
    }

    function getPointActuel() {
        return $this->point_actuel;
    }

    function setPointActuel($pointActuel) {
        $this->point_actuel = $pointActuel;
    }

    function getPointClassement() {
        return $this->point_classement;
    }

    function setPointClassement($pointClassement) {
        $this->point_classement = $pointClassement;
    }

    function getStatus() {
        return $this->status;
    }

    function setStatus($status) {
        $this->status = $status;
    }

    function getScoreJeu() {
        return $this->score_jeu;
    }

    function setScoreJeu($scoreJeu) {
        $this->score_jeu = $scoreJeu;
    }
}
?>
