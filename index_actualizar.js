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

					$('#Latitud1').load("Latitud1.php");
					$('#Longitud1').load("Longitud1.php");
					$('#Fecha1').load("Fecha1.php");
					$('#Hora1').load("Hora1.php");
					$('#Distancia1').load("Distancia1.php");

					$('#Latitud2').load("Latitud2.php");
					$('#Longitud2').load("Longitud2.php");
					$('#Fecha2').load("Fecha2.php");
					$('#Hora2').load("Hora2.php");
					$('#Distancia2').load("Distancia2.php");

					Valor = document.getElementById("Auto").value;
					mostrar(Valor);
					
			},1500
		);			
	});


		document.getElementById('Auto').onchange = function () {
			Valor = document.getElementById("Auto").value;
			mostrar(Valor);

		};


		function asignar_color(){
			    	var Distancia1 = parseFloat($("#Distancia1").text());
					var Distancia2 = parseFloat($("#Distancia2").text());
				
					if(Distancia1<=150 && Distancia1>100){
						document.getElementById("distance2").style.backgroundColor = "#FFF929";
					} else if(Distancia1<=100){
						document.getElementById("distance2").style.backgroundColor = "#F31C1C";
					} else if(Distancia1>150){
						document.getElementById("distance2").style.backgroundColor = "#15FB4D";
					}

					if(Distancia2<=150 && Distancia2>100){
						document.getElementById("distance3").style.backgroundColor = "#FFF929";
					} else if(Distancia2<=100){
						document.getElementById("distance3").style.backgroundColor = "#F31C1C";
					} else if(Distancia2>150){
						document.getElementById("distance3").style.backgroundColor = "#15FB4D";
					}
		}


		function mostrar (Valor){
					var Latitud1=parseFloat($("#Latitud1").text());
					var Longitud1= parseFloat($("#Longitud1").text());
					
					var Latitud2=parseFloat($("#Latitud2").text());
					var Longitud2= parseFloat($("#Longitud2").text());	

					polyline_v1.addLatLng([Latitud1,Longitud1])	
					polyline_v2.addLatLng([Latitud2,Longitud2])	

					if(Valor==1){
					$('#Latitud').load("Latitud1.php");
					$('#Longitud').load("Longitud1.php");
					$('#Fecha').load("Fecha1.php");
					$('#Hora').load("Hora1.php");
					$('#Distancia').load("Distancia1.php");
					document.getElementById("box").style.display = "block";
					document.getElementById("box2").style.display = "none";
					document.getElementById("distance").style.display = "block";
					document.getElementById("distance2").style.display = "none";
					document.getElementById("distance3").style.display = "none";


					map.addLayer(polyline_v1);
					map.removeLayer(polyline_v2);
					map.removeLayer(marker_v2);
					map.addLayer(marker_v1);
					var newLatLng = new L.LatLng(Latitud1, Longitud1);
    					marker_v1.setLatLng(newLatLng); 
				    	marker_v1.bindPopup("Vehículo 1").openPopup();
					var popup = L.popup(); 


					if(Checkstatus.checked) {
						map.fitBounds(polyline_v1.getBounds());
					
					} else {
						map.setView([Latitud1,Longitud1]);					
					}

					asignar_color();

			}else if (Valor==2){
					$('#Latitud').load("Latitud2.php");
					$('#Longitud').load("Longitud2.php");
					$('#Fecha').load("Fecha2.php");
					$('#Hora').load("Hora2.php");
					$('#Distancia').load("Distancia2.php");
					map.addLayer(polyline_v2);
					map.removeLayer(polyline_v1);
					map.removeLayer(marker_v1);
					map.addLayer(marker_v2);
					document.getElementById("box").style.display = "block";
					document.getElementById("box2").style.display = "none";	
					document.getElementById("distance").style.display = "block";
					document.getElementById("distance2").style.display = "none";
					document.getElementById("distance3").style.display = "none";

					var newLatLng = new L.LatLng(Latitud2, Longitud2);
    					marker_v2.setLatLng(newLatLng); 
					marker_v2.valueOf()._icon.style.filter = 'hue-rotate(180deg)';
    					marker_v2.bindPopup("Vehículo 2").openPopup();
					var popup = L.popup();


					if(Checkstatus.checked) {
						map.fitBounds(polyline_v2.getBounds());
					
					} else {
						map.setView([Latitud2,Longitud2]);					
					}

					asignar_color();


			}else if(Valor==3){
				
					$('#Distancia1').load("Distancia1.php");
					$('#Distancia2').load("Distancia2.php");

					map.addLayer(polyline_v1);
					map.addLayer(polyline_v2);
					map.addLayer(marker_v1);
					map.addLayer(marker_v2);
					marker_v2.valueOf()._icon.style.filter = 'hue-rotate(180deg)';
					document.getElementById("box").style.display = "none";
					document.getElementById("box2").style.display = "block";
					document.getElementById("distance").style.display = "none";
					document.getElementById("distance2").style.display = "block";
					document.getElementById("distance3").style.display = "block";

					var newLatLng1 = new L.LatLng(Latitud1, Longitud1);
    					marker_v1.setLatLng(newLatLng1);
					var newLatLng2 = new L.LatLng(Latitud2, Longitud2);
    					marker_v2.setLatLng(newLatLng2);

    				asignar_color();
				}

		}




