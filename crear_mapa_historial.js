var LatLon = [10.996863,-74.810319];
var map = L.map('map').setView(LatLon,16);
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>'
}).addTo(map);
var myMarker = L.marker(LatLon).addTo(map)
var markery = L.marker(LatLon).addTo(map)
var polyline = L.polyline([]).addTo(map);	
