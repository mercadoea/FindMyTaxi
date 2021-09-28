<!DOCTYPE html>
<html>
<head>
	<title> </title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" charset = "utf-8"/>

	<script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
	<script	src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
	<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==" crossorigin=""/>
	<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==" crossorigin=""></script>
	<link rel="stylesheet" href="style.css" type="text/css"/> 
</head>

<body style= "background-color:#FCA652">	  

	<div id="mySidebar" class="sidenav">
		<a href="javascript:void(0)" class="closebtn" onclick="closeNav()"><p style="float: right;">&times; Cerrar Menú &nbsp;&nbsp;</p></a>
		<div class="logo" style="float: left;"></div>
		<div class="title">Find My Taxi</div>
		<hr></hr>
		<a href="index.html">
			<div class="home">
            	<img src="home.png" class="img-fluid" style="width:30px; height: 30px; float: left;">
      		</div>
			&nbsp;&nbsp; Inicio
		</a>
		<a class="active" href="historial.php">
			<div class="record">
				<img src="record.png" class="img-fluid" style="width:30px; height: 30px; float: left;">
		  	</div>
		&nbsp;&nbsp; Historial
		</a>

		<div class="datetime">
			<hr></hr>
			<br>
				<b style="font-size: 18px;">Selecciona la fecha y hora inicial de filtrado:
					<br>				
						<input type="datetime-local" id="timestamp" style="width: 210px;" data-date-format="DD MMMM YYYY, h:mm:ss">
					</br>
				</b>
			</br>
			<br>
				<b style="font-size: 18px;">Selecciona la fecha y hora final de filtrado:
					<br>				
						<input type="datetime-local" id="timestamp" style="width: 210px;" data-date-format="DD MMMM YYYY, h:mm:ss">
					</br>
				</b>
			</br>
			<br>			
				<button class="searchbtn" id="searchDateTime">Buscar&#128270;</button>
			</br>
		</div>
		
    </div>  

	<div id="main" class="main">
		<button class="openbtn" id="openButton" onclick="openNav()">&#9776; Abrir Menú</button>
		<div id="map"></div>

		<script type="text/javascript">
			var Latitud='0';
			var Longitud='0';
			var start = true;			
			var map = L.map('map').setView([Latitud,Longitud],16);
			L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>'
			}).addTo(map);
			var myMarker = L.marker([Latitud, Longitud]).addTo(map).bindPopup('My location')
				.openPopup();
			var myMarker = L.marker([Latitud, Longitud]).addTo(map);
			var polyline = L.polyline([]).addTo(map)
		</script>	
	</div>
</body>
</html>

<script type="text/javascript">
	function openNav() {
  		document.getElementById("mySidebar").style.width = "250px";
 		document.getElementById("main").style.marginLeft = "250px";
		document.getElementById("openButton").style.display = "none";
		}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
	function closeNav() {
		document.getElementById("mySidebar").style.width = "0";
		document.getElementById("main").style.marginLeft = "0";
		document.getElementById("openButton").style.display = "block";
	}

	$(document).ready(function(){
		setInterval(
				function(){
					$('#Latitud').load('Latitud.php');
					$('#Longitud').load('Longitud.php');
					$('#Fecha').load('Fecha.php');
					$('#Hora').load('Hora.php');
					var Latitud=parseFloat($('#Latitud').text());
					var Longitud= parseFloat($('#Longitud').text());
					if (start){
                	markery = new L.marker([Latitud, Longitud]).addTo(map);
                	start = false;
           			}

					map.setView([Latitud,Longitud]);
					var newLatLng = new L.LatLng(Latitud, Longitud);
    					myMarker.setLatLng(newLatLng); 		
					polyline.addLatLng([Latitud,Longitud])	
					//map.fitBounds(polyline.getBounds());
				},1500
			);			
	});

</script>
