function iniciarMap(){
    var coord = {lat:11.21894671 ,lng:-74.176332537 };
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 20,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}