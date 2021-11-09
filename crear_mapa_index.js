			var Latitud='10.996863';
			var Longitud='-74.810319';
			var start = true;			
			var map = L.map('map').setView([Latitud,Longitud],16);
			L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>'
			}).addTo(map);
			var polyline = L.polyline([]).addTo(map);
			var polyline_v1 = L.polyline([]).addTo(map);
			var polyline_v2 = L.polyline([], {color: 'red'}).addTo(map);
			var marker_v1 = L.marker([Latitud, Longitud]).addTo(map);
			var marker_v2 = L.marker([Latitud, Longitud]).addTo(map);
			Checkstatus = document.getElementById("miCheck");
