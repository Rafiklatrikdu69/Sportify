<?php

class Utilisateur{
    private $id;
    private $nom;
    private $prenom;
    private $email;
    private $mdp;
    function __construct($id, $nom, $prenom, $email, $mdp) {
        $this->id = $id;
        $this->nom = $nom;
        $this->prenom = $prenom;
        $this->email = $email;
        $this->mdp = $mdp;
    }
    function getId() {
        return $this->id;
    }
    function setId($id) {
        $this->id = $id;
    }
    function getNom() {
        return $this->nom;
    }
    function setNom($nom) {
        $this->nom = $nom;
    }
    function getPrenom() {
        return $this->prenom;
    }
    function setPrenom($prenom) {
        $this->prenom = $prenom;
    }
    function getEmail() {
        return $this->email;
    }
    function setEmail($email) {
        $this->email = $email;
    }
    function getMdp() {
        return $this->mdp;
    }
    function setMdp($mdp) {
        $this->mdp = $mdp;
    }
    
}