function onMapClick(e) {
	var checkBox = document.getElementById("miCheckUbication");
	if (checkBox.checked == true){
		document.getElementById("historialtitle").style.display = "block";
		var latlon_click=e.latlng;
		var Fecha=[];
		var n=0;
		for(var i = 0; i<= latlon.length-1; i++){
			var distance = map.distance(latlon_click , [  latlon[i][0] , latlon[i][1]   ]);
			if (distance < min) {
				Fecha[n]=latlon[i][2];
				n=n+1;
			}
		}
		document.getElementById('fechashist').innerHTML = "Coordenadas geográficas: <br>" + latlon_click.toString()+'<br> Fechas: <br>' + Fecha.join('<br>');
		circle
		.setLatLng(latlon_click);
		popup
		.setLatLng(e.latlng)
		.setContent("Coordenadas geográficas: <br>" + latlon_click.toString()+'<br> Fechas: <br>' + Fecha.join('<br>') )
		.openOn(map);
	}else if (checkBox.checked == false){ 
		document.getElementById("historialtitle").style.display = "none";
		circle
		.setLatLng([0,0]);
		}
}
