<?php 
include("Conexion.php");
$consulta = "SELECT * FROM location WHERE ID_C=2 ORDER BY ID DESC LIMIT 1";
		$resultado = mysqli_query($connection,$consulta);
		$row = mysqli_fetch_array($resultado);
		$Longitud = $row['lon'];
		echo  $Longitud
?>