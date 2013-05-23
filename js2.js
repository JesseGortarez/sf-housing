var ships = [[63.44204833, 10.40340333], [63.49261667, 9.92661167]];
var map;

var infowindow = [];
var marker = [];

function initialize() {
    var myLatlng = new google.maps.LatLng(63.44204833, 10.40340333);
    var myOptions = {
        zoom: 9,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.TERRAIN
    }
    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

}

function createMarker(lat, lon, html) {
    var newmarker = new google.maps.Marker({
        position: new google.maps.LatLng(lat, lon),
        map: map,
        title: html
    });
    
    newmarker['infowindow'] = new google.maps.InfoWindow({
            content: html
        });

    google.maps.event.addListener(newmarker, 'mouseover', function() {
        this['infowindow'].open(map, this);
    });
    
    marker.push(newmarker);
}

function processShips(ships) {
    for (var i = 0; i < ships.length; i++) {
        createMarker(ships[i][0], ships[i][1], 'bla' + i);
    }
}

function load(ships) {
    initialize();
    processShips(ships);
}

function gotoPoint(myPoint){
    map.setCenter(new google.maps.LatLng(marker[myPoint-1].position.lat(), marker[myPoint-1].position.lng()));
    marker[myPoint-1]['infowindow'].open(map, marker[myPoint-1]);
}

window.onload = load(ships);

