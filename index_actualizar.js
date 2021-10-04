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
