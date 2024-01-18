<?php

class Items{

    // variables (attributs)
    private $item_id;
    private $item_name;
    private $item_type;
    private $item_description;
    private $item_price;
    private $item_color;

    // constructeur
    function __construct($item_id,$item_name,$item_type,$item_description,$item_price,$item_color) {
        $this->item_id = $item_id;
        $this->item_name = $item_name;
        $this->item_type = $item_type;
        $this->item_description = $item_description;
        $this->item_price = $item_price;
        $this->item_color = $item_color;
    }

    // geters
    function getId() {
        return $this->item_id;
    }

    function getName() {
        return $this->item_name;
    }

    function getType() {
        return $this->item_type;
    }

    function getDescription() {
        return $this->item_description;
    }

    function getPrice() {
        return $this->item_price;
    }

    function getColor() {
        return $this->item_color;
    }

  
}