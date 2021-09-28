<?php

/*
Archivo de conexion a la base de datos en AWS
Tener cuidado con instalar php-mysqli para que funcione
Testeado con PHP 7.4
*/

$host = "findmytaxi.cbjilbug2hvk.us-east-2.rds.amazonaws.com";
$username = "admin";
$password = "jaraba6234";
$database = "findmytaxi";
$connection = mysqli_connect($host, $username, $password, $database);

?>
