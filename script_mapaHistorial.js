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
		var inicial=new L.LatLng(latlon[0][0],latlon[0][1]);
		myMarker.setLatLng(inicial).bindPopup('Ubicación inicial').openPopup();
		var final=new L.LatLng(latlon[latlon.length -1][0],latlon[latlon.length -1][1]);
		console.log(final)
		 markery.setLatLng(final).bindPopup('Ubicación final').openPopup();
		polyline.setLatLngs(latlon);
		map.fitBounds(polyline.getBounds());	
	});
});

}
