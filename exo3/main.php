<?php
class Human
{
    public $firstname;
    public $lastname;
    public $birthdate;

    function __construct($firstname, $lastname, $birthdate)
    {
        $this->firstname = $firstname;
        $this->lastname = $lastname;
        $this->birthdate = $birthdate;
    }
}
$new_human = new Human("Jean", "Bon", 20 / 02 / 2020);
echo ($new_human);
