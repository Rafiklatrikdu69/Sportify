<?php

class Likes{

    private $post_id;
    private $user_id;

    function __construct($post_id,$user_id) {
        $this->user_id = $user_id;
        $this->post_id = $post_id;
    }
    
    function getPostId() {
        return $this->post_id;
    }
    
    function getUserId() {
        return $this->user_id;
    }
}