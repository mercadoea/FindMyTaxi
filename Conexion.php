<?php 

$host = getenv("FINDMYTAXI_HOST");  #Si es en otro lugar va el HTTP..
$username = getenv("FINDMYTAXI_USER");
$password = getenv("FINDMYTAXI_PASSWORD");
$registro = getenv("FINDMYTAXI_REG");
$connection = mysqli_connect($host, $username, $password, $registro);

?>
