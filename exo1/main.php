<?php

class Book
{
    public $bookName;
    public $bookPrice;

    function _construct($bookName, $bookPrice)
    {
        $this->$bookName = $bookName;
        $this->$bookPrice = $bookPrice;
    }
}

$book01 = new Book("Le petit poucet", 9.99);

echo ($book01);
