			var Latitud='0';
			var Longitud='0';
			var start = true;			
			var map = L.map('map').setView([Latitud,Longitud],16);
			L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>'
			}).addTo(map);
			var myMarker = L.marker([Latitud, Longitud]).addTo(map).bindPopup('My location')
				.openPopup();
			var myMarker = L.marker([Latitud, Longitud]).addTo(map);
			var polyline = L.polyline([]).addTo(map)
			Checkstatus = document.getElementById("miCheck");
