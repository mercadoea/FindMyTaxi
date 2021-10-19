<?php
include("Conexion.php"); 
if(isset($_POST["startDate"]) && $_POST["endDate"] && $_POST["Value"]) {
	$startDate = strval($_POST['startDate']);
	$endDate = strval($_POST['endDate']);
	$Value = strval($_POST['Value']);
	$date_i = intval(preg_replace('/[^0-9]+/', '', $startDate), 10); 
	$date_f = intval(preg_replace('/[^0-9]+/', '', $endDate), 10);
	$historical = mysqli_query($connection,"SELECT * FROM location WHERE dateTime>=$date_i AND dateTime<=$date_f AND ID_C=$Value ORDER BY ID ASC");
	while($consulta=mysqli_fetch_array($historical)){
		$poly[]=array((float) $consulta['lat'],(float) $consulta['lon'],(string) $consulta['dateTime']);		
	}
	echo json_encode($poly);
}
?>