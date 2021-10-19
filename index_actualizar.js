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

		var Valor=1;

		const Menu = document.getElementById('Auto');
        Menu.addEventListener('focusout', (event) => {


		Valor = document.getElementById("Auto").value;

					$('#Latitud').load("Latitud"+Valor+".php",function(){
						polyline.setLatLngs([]);
						var Latitud=parseFloat($('#Latitud').text());
						var Longitud= parseFloat($('#Longitud').text());
						var newLatLng = new L.LatLng(Latitud, Longitud);
						myMarker.setLatLng(newLatLng);

					});
					$('#Longitud').load("Longitud"+Valor+".php",function(){
						polyline.setLatLngs([]);
						var Latitud=parseFloat($('#Latitud').text());
						var Longitud= parseFloat($('#Longitud').text());
						var newLatLng = new L.LatLng(Latitud, Longitud);
						myMarker.setLatLng(newLatLng);

					});
					$('#Fecha').load("Fecha"+Valor+".php");
					$('#Hora').load("Hora"+Valor+".php");
					

		
        });


	$(document).ready(function(){
		setInterval(
				function(){

					$('#Latitud').load("Latitud"+Valor+".php");
					$('#Longitud').load("Longitud"+Valor+".php");
					$('#Fecha').load("Fecha"+Valor+".php");
					$('#Hora').load("Hora"+Valor+".php");

					var Latitud=parseFloat($('#Latitud').text());
					var Longitud= parseFloat($('#Longitud').text());
					if (start){
                	markery = new L.marker([Latitud, Longitud]).addTo(map);
                	start = false;
           			}
					var newLatLng = new L.LatLng(Latitud, Longitud);
    					myMarker.setLatLng(newLatLng); 

					polyline.addLatLng([Latitud,Longitud])	
					if(Checkstatus.checked) {
						map.fitBounds(polyline.getBounds());
					
					} else {
						map.setView([Latitud,Longitud]);					
					}
					
				},1500
			);			
	});
