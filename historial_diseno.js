//comentario
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

function searchAgain() {
	document.getElementById("search").style.display = "none";
	document.getElementById("filter").style.display = "block";}
    
	$(function() {
		$('input[name="datetimes"]').daterangepicker({
			timePicker: true,
			timePickerSeconds: true,
			autoUpdateInput: false,
			timePicker24Hour: true,
			opens: 'right',
			showDropdowns: true,
			locale: {
				format: 'YYYY-MM-DD hh:mm:ss',
				applyLabel: "Buscar",
				cancelLabel: "Cancelar"
			},
    	  	minYear: 1901,
    		maxYear: parseInt(moment().format('YYYY'),10)

		});
		 
		$('input[name="datetimes"]').on('apply.daterangepicker', function(ev, picker) {
			polyline_v1.setLatLngs([]);
			polyline_v2.setLatLngs([]);
			$(this).val(picker.startDate.format('YYYY-MM-DD hh:mm:ss') + ' - ' + picker.endDate.format('YYYY-MM-DD hh:mm:ss'));
			document.getElementById('start').innerHTML = picker.startDate.format('YYYY-MM-DD hh:mm:ss');
			document.getElementById('end').innerHTML = picker.endDate.format('YYYY-MM-DD hh:mm:ss');
			
			document.getElementById("search").style.display = "block";
			document.getElementById("filter").style.display = "none";
			
			$.post('consulta_historico.php', {startDate: picker.startDate.format('YYYY-MM-DD hh:mm:ss'), endDate: picker.endDate.format('YYYY-MM-DD hh:mm:ss')}, function(data) {
				latlon = JSON.parse(data);
				console.log(data);
				var primer_v1=true;
				var primer_v2=true;
			for(var i =0; i<latlon.length;i++){
				if(latlon[i][3]==1){
					polyline_v1.addLatLng([latlon[i][0],latlon[i][1]]);	
					if(primer_v1){
						newLatLng = new L.LatLng(latlon[i][0], latlon[i][1]);
						marker_v1i.setLatLng(newLatLng).bindPopup('Ubicación inicial del Vehículo 1 = <br>Lat: ' + latlon[i][0] + '<br>Lon: ' + latlon[i][1]).openPopup();
						primer_v1=false;
					}
					newLatLng =new L.LatLng(latlon[i][0], latlon[i][1]);
					marker_v1f.setLatLng(newLatLng).bindPopup('Ubicación final del Vehículo 1= <br>Lat: ' + latlon[i][0] + '<br>Lon: ' + latlon[i][1]).openPopup();
				}else if (latlon[i][3]==2){
				polyline_v2.addLatLng([latlon[i][0],latlon[i][1]])	
					if(primer_v2){
						newLatLng = new L.LatLng(latlon[i][0], latlon[i][1]);
						marker_v2i.setLatLng(newLatLng).bindPopup('Ubicación inicial del Vehículo 2 = <br>Lat: ' + latlon[i][0] + '<br>Lon: ' + latlon[i][1]).openPopup();
						primer_v2=false;
					}
					newLatLng =new L.LatLng(latlon[i][0], latlon[i][1]);
					marker_v2f.setLatLng(newLatLng).bindPopup('Ubicación final del Vehículo 2 = <br>Lat: ' + latlon[i][0] + '<br>Lon: ' + latlon[i][0]).openPopup();
				}
			}			

		valor = document.getElementById("Auto").value;
		cambio(valor);

		document.getElementById('Auto').onchange = function () {
			valor = document.getElementById("Auto").value;
			cambio(valor);

		};			

			function cambio (valor){
				if(valor==1){
					map.removeLayer(polyline_v2);
					map.removeLayer(marker_v2i);
					map.removeLayer(marker_v2f);
					map.addLayer(polyline_v1);
					map.addLayer(marker_v1i);
					map.addLayer(marker_v1f);
					map.fitBounds(polyline_v1.getBounds());
				} else if(valor==2){
					map.removeLayer(polyline_v1);
					map.removeLayer(marker_v1i);
					map.removeLayer(marker_v1f);
					map.addLayer(polyline_v2);
					map.addLayer(marker_v2i);
					map.addLayer(marker_v2f);
					marker_v2i.valueOf()._icon.style.filter = 'hue-rotate(180deg)';
					marker_v2f.valueOf()._icon.style.filter = 'hue-rotate(180deg)';
					map.fitBounds(polyline_v2.getBounds());
				}else{
					map.addLayer(polyline_v1);
					map.addLayer(marker_v1i);
					map.addLayer(marker_v1f);
					map.addLayer(polyline_v2);
					map.addLayer(marker_v2i);
					map.addLayer(marker_v2f);
					marker_v2i.valueOf()._icon.style.filter = 'hue-rotate(180deg)';
					marker_v2f.valueOf()._icon.style.filter = 'hue-rotate(180deg)';
				}	
			}			

				map.on('click', onMapClick);	
			});

		});



	  
		$('input[name="datetimes"]').on('cancel.daterangepicker', function(ev, picker) {
			$(this).val('');
		});
	  
	});
