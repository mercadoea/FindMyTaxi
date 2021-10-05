$(document).ready(function(){	
	enviarDatos();
});
var latlon=[0,0];

function enviarDatos(){

	$("#frm").on("submit", function(e){
	e.preventDefault(); //Previene que la pagina se recargue
	var frm = $("#frm").serialize();
	$.ajax({
		"method": "POST",
		"url": "consulta_historico.php",
		"data": frm
	}).done(function(LatLon){
		latlon = JSON.parse(LatLon);
		var inicial=new L.LatLng(latlon[0][0],latlon[0][1]);
		myMarker.setLatLng(inicial).bindPopup('Ubicación inicial').openPopup();
		var final=new L.LatLng(latlon[latlon.length -1][0],latlon[latlon.length -1][1]);
		 markery.setLatLng(final).bindPopup('Ubicación final').openPopup();
		polyline.setLatLngs(latlon);
		map.fitBounds(polyline.getBounds());	
		map.on('click', onMapClick);		
	});
});

}

	function onMapClick(e) {
		var latlon_click=e.latlng;
		var min=50;
		var Fecha=[];
		var n=0;
		for(var i = 0; i<= latlon.length-1; i++){

			var distance = map.distance(latlon_click , [  latlon[i][0] , latlon[i][1]   ]);
				if (distance < min) {
					console.log(distance);
      			Fecha[n]=latlon[i][2];
      			n=n+1;
    			}
		}
			console.log(Fecha);
			popup
			.setLatLng(e.latlng)
			.setContent("Coordenadas geográficas: <br>" + latlon_click.toString()+'<br> Fechas: <br>' + Fecha.join('<br>') )
			.openOn(map);
}

