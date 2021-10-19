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
			$(this).val(picker.startDate.format('YYYY-MM-DD hh:mm:ss') + ' - ' + picker.endDate.format('YYYY-MM-DD hh:mm:ss'));
			$.post('consulta_historico.php', {startDate: picker.startDate.format('YYYY-MM-DD hh:mm:ss'), endDate: picker.endDate.format('YYYY-MM-DD hh:mm:ss'), Value: document.getElementById("Auto").value }, function(data) {
				latlon = JSON.parse(data);
				var inicial=new L.LatLng(latlon[0][0],latlon[0][1]);
				myMarker.setLatLng(inicial).bindPopup('Ubicación inicial = <br>Lat: ' + latlon[0][0] + '<br>Lon: ' + latlon[0][1]).openPopup();
				var final=new L.LatLng(latlon[latlon.length -1][0],latlon[latlon.length -1][1]);
				markery.setLatLng(final).bindPopup('Ubicación final = <br>Lat: ' + latlon[latlon.length -1][0] + '<br>Lon: ' + latlon[latlon.length -1][1]).openPopup();
				polyline.setLatLngs(latlon);
				map.fitBounds(polyline.getBounds());	
				map.on('click', onMapClick);	
			});

		});
	  
		$('input[name="datetimes"]').on('cancel.daterangepicker', function(ev, picker) {
			$(this).val('');
		});
	  
	});