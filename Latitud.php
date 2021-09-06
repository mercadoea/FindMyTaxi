<?php 
include("Conexion.php");
$consulta = "SELECT * FROM location ORDER BY ID DESC LIMIT 1";
		$resultado = mysqli_query($connection,$consulta);
		$row = mysqli_fetch_array($resultado);
		$Latitud = $row['lat'];
		echo  $Latitud
?>
