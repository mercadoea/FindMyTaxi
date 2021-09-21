
var Latitud = 0;
var Longitud = 0;
var markers = new Array;
var position = new Array;
var start = true;
var newLatLng = new L.LatLng(Latitud, Longitud);


var map = L.map('map').setView([Latitud, Longitud], 16);
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>'
}).addTo(map);
var myMarker = L.marker(newLatLng).addTo(map);
var polyline = L.polyline([],{color: 'black'}).addTo(map);






$(document).ready(function () {
    setInterval(
        function () {

            $('#Latitud').load('Latitud.php');
            $('#Longitud').load('Longitud.php');
            $('#Fecha').load('Fecha.php');
            $('#Hora').load('Hora.php');
            var Latitud = parseFloat($('#Latitud').text());
            var Longitud = parseFloat($('#Longitud').text());
            //map.setView([Latitud, Longitud]);

            position[0] = Latitud;
            position[1] = Longitud;

            markers.push(position);
            if (start){
                markery = new L.marker().addTo(map);
                start = false;
            }
            
            

            var newLatLng = new L.LatLng(Latitud, Longitud);
            myMarker.setLatLng(newLatLng);
            polyline.addLatLng(newLatLng);
            map.fitBounds(polyline.getBounds());




        }, 1500
    );
});
