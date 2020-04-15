<?php
class Furniture
{
    public $editor;
    public $designer;
    public $conception_year;

    function __construct($editor, $designer, $conception_year)
    {
        $this->editor = $editor;
        $this->designer = $designer;
        $this->conception_year = $conception_year;
    }
}

$new_furniture = new Furniture("Knoll", "Marcel Breuer", 1925);

echo ($new_furniture);
