const svg = d3.select("svg");
var LatLon = [10.996863,-74.810319];
var map = L.map('map').setView(LatLon,16);
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>'
}).addTo(map);
var polyline_v1	= L.polyline([]).addTo(map);
var polyline_v2 = L.polyline([], {color: 'red'}).addTo(map);
var marker_v1i = L.marker(LatLon).addTo(map);
var marker_v2i = L.marker(LatLon).addTo(map);
var marker_v1f = L.marker(LatLon).addTo(map);
var marker_v2f = L.marker(LatLon).addTo(map);
var popup = L.popup();
var min = 15;
function areaValue(val){
	min = val;
}

// Event slider for input slider

const circle = svg
 	.append("circle")
 	.attr("cx", 100)
 	.attr("cy", 100)
	.attr("fill", "#69B4FD")
 	.attr("stroke", "blue")
	.attr("fillOpacity", "0.5")
	.attr("r", 15);
      
L.circle([0,0]).addTo(map);

function update(radius) {
  circle.attr('r', radius);
}

d3.select('#myRange').on('input', function() {
  update(parseInt(this.value));
});
