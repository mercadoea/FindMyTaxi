function onMapClick(e) {	
	let r = document.getElementById("myRange").value;
	var checkBox = document.getElementById("miCheckUbication");
	if (checkBox.checked == true){
		document.getElementById("historialtitle").style.display = "block";
		var latlon_click=e.latlng;
		var Fecha=[];
		var Distancia=[];
		var n=0;
		for(var i = 0; i<= latlon.length-1; i++){
			var distance = map.distance(latlon_click , [  latlon[i][0] , latlon[i][1]   ]);
			if (distance < r) {
				Fecha[n]=latlon[i][2];
				Distancia[n]=latlon[i][4];
				n=n+1;
			}
		}
		
		for(var i = 0; i<= n-1; i++){
			document.getElementById('fechashist').innerHTML = "<b> Coordenadas geográficas: </b> <br>" + latlon_click.toString()+'<br> <b> Fechas y distancias: </b> <br>' + Fecha.join(' ' + Distancia[i] + 'cm <br>') ;
		}
		
		circle
		.setLatLng(latlon_click);
		popup
		.setLatLng(e.latlng)
		.setContent(latlon_click.toString())
		.openOn(map);
	}else if (checkBox.checked == false){ 
		document.getElementById("historialtitle").style.display = "none";
		circle
		.setLatLng([0,0]);
		}
}
