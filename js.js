var sf = new google.maps.LatLng(37.757687, -122.437649);

var neighborhoods = [
	new google.maps.LatLng(37.77887, -122.426729),
	new google.maps.LatLng(37.75287, -122.424559),
	new google.maps.LatLng(37.716743, -122.44),
	new google.maps.LatLng(37.72561, -122.4316)
];


var markers = [];
var iterator = 0;

var map;

function initialize() {
  var mapOptions = {
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center: sf
  };

  map = new google.maps.Map(document.getElementById('map-canvas'),
          mapOptions);

	drop();                    
}

function drop() {
  for (var i = 0; i < neighborhoods.length; i++) {
    setTimeout(function() {
      addMarker();
    }, i * 300);
  }
}
          
function addMarker() {
  markers.push(new google.maps.Marker({
    position: neighborhoods[iterator],
    map: map,
    draggable: false,
    animation: google.maps.Animation.DROP
  }));
  iterator++;
}




google.maps.event.addDomListener(window, 'load', initialize);


