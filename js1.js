var sf = new google.maps.LatLng(37.757687, -122.437649);


$.getJSON('housing2.json', function(data) {
  var items = [];
  

  $.each(data, function(key, val) {
  	var re = /\(.+\)/;
		key = new Object();
		key.location = val["Location 1"].match(re)[0];
		key.name = val["LANDUSE"];
		items.push({loc: key.location, name: key.name});
		
  });

		
	for(var x in items){
		
	var noPar = /[^\(\)]/g;
	var numPar = items[x].loc.match(noPar).join('');
	var fullNumber = numPar.split(',');
	var lat = fullNumber[0];
	var lng = fullNumber[1];
	var itemName = items[x].name;



	projects.push({loc: new google.maps.LatLng(lat, lng), name: itemName});
}

});


var projects = [];



var map;
var markers = [];


function initialize() {
	var mapOptions = {
		zoom: 13,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		center: sf
	};

	map = new google.maps.Map(document.getElementById('map-canvas'),
          mapOptions);

  // Any additional functions such as drop() go here

		addMarker();
}

function addMarker(){
	for (i = 0; i < projects.length; i++){
			projects[i] = new google.maps.Marker({
			position: projects[i].loc,
			map: map,
			draggable: false,
			clickable: true,
			title: projects[i].name,
			animation: google.maps.Animation.DROP
			});
			
			infowindow = new google.maps.InfoWindow({
            content: projects[i].title
         });
        
     new google.maps.event.addListener(projects[i], 'click', function() {
        infowindow.open(map, this);
     });
	}

}

google.maps.visualRefresh=true;


google.maps.event.addDomListener(window, 'load', initialize);











