<?php

//cette classe est un debut -> a changer !

class StoreController  extends Controllers
{
   public function index()
   {
      View::View('boutique',['tabItems'=>(new ItemsDAO())->getAll()]);
   }
}


