<?php
include("Conexion.php"); 
if(isset($_POST["date_i"]) && $_POST["date_f"]) {
	$Date_i=strval($_POST["date_i"]);
	$Date_f=strval($_POST["date_f"]);
	$date_i = intval(preg_replace('/[^0-9]+/', '', $Date_i), 10)."00"; 
	$date_f = intval(preg_replace('/[^0-9]+/', '', $Date_f), 10)."00"; 
	$historical = mysqli_query($connection,"SELECT * FROM location WHERE dateTime>=$date_i AND dateTime<=$date_f  ORDER BY ID ASC");
	while($consulta=mysqli_fetch_array($historical)){
		$poly[]=array((float) $consulta['lat'],(float) $consulta['lon']);
	}
	echo json_encode($poly);
}	
?>
