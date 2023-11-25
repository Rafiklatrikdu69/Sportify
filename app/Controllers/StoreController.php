<?php

//cette classe est un debut -> a changer !

class StoreController  extends Controllers
{
   public function index()
   {
      (new VerifSession());
      View::View('boutique',['tabItems'=>(new ItemsDAO())->getAll()]);
   }
}


