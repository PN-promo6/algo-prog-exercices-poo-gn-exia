<?php
class Client
{
    private $name;
    private $account_number;

    function __construct($name, $account_number)
    {
        $this->name = $name;
        $this->account_number = $account_number;
    }
}
