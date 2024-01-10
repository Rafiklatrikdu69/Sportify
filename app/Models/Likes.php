<?php

class Likes{

    private $user_id;
    private $post_id;

    function __construct($user_id,$post_id) {
        $this->user_id = $user_id;
        $this->post_id = $post_id;
    }
    
    function getUserId() {
        return $this->user_id;
    }

    function getPostId() {
        return $this->post_id;
    }
}