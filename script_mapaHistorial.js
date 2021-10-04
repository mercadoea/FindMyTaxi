$(document).ready(function(){	
	enviarDatos();
});

function enviarDatos(){

	$("#frm").on("submit", function(e){
	e.preventDefault(); //Previene que la pagina se recargue
	var frm = $("#frm").serialize();
	$.ajax({
		"method": "POST",
		"url": "consulta_historico.php",
		"data": frm
	}).done(function(LatLon){
		var latlon = JSON.parse(LatLon);
		var inicial=latlon[0];		
		var myMarker = L.marker(inicial).addTo(map).bindPopup('Ubicación inicial').openPopup();
		var final=latlon[latlon.length -1];
		var markery = L.marker(final).addTo(map).addTo(map).bindPopup('Ubicación final').openPopup();
		var polyline = L.polyline(latlon).addTo(map);
		map.fitBounds(polyline.getBounds());	
	});
});

}
