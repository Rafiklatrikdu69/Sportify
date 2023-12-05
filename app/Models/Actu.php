<?php

class Actualites{

    private $post_id;
    private $auteur_id;
    private $post_titre;
    private $post_contenu;
    private $nb_like;

    function __construct($post_id,$auteur_id,$post_titre,$post_contenu,$nb_like) {
        $this->post_id = $post_id;
        $this->auteur_id = $auteur_id;
        $this->post_titre = $post_titre;
        $this->post_contenu = $post_contenu;
        $this->nb_like = $nb_like;
    }


    function getId() {
        return $this->post_id;
    }

    function getAuteurId() {
        return $this->auteur_id;
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