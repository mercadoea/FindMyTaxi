<?php 
include("Conexion.php");
$consulta = "SELECT * FROM location ORDER BY time DESC LIMIT 1";
		$resultado = mysqli_query($connection,$consulta);
		$row = mysqli_fetch_array($resultado);
		$Hora = $row['time'];
		echo  $Hora
?>