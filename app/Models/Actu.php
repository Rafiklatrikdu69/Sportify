<?php

class Actu{

    private $id;
    private $auteur_id;
    private $auteur_nom;
    private $post_titre;
    private $post_contenu;
    private $nb_like;

    function __construct($id,$auteur_id,$auteur_nom,$post_titre,$post_contenu,$nb_like) {
        $this->auteur_id = $auteur_id;
        $this->auteur_nom = $auteur_nom;
        $this->post_titre = $post_titre;
        $this->post_contenu = $post_contenu;
        $this->nb_like = $nb_like;
        $this->id = $id;
    }

    function getId() {
        return $this->id;
    }

    function getAuteurId() {
        return $this->auteur_id;
    }

    function getAuteurName(){
        return $this->auteur_nom;
    }

    function getTitre() {
        return $this->post_titre;
    }

    function getContenu() {
        return $this->post_contenu;
    }

    function getNbLike() {
        return $this->nb_like;
    }

}