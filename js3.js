var sf = new google.maps.LatLng(37.757687, -122.437649);
/*

var projects = {
	1: {name: "Project 1", location: new google.maps.LatLng(37.77887, -122.426729), status: "In process", description: "This is the first description."},
	2: {name: "Project 2", location: new google.maps.LatLng(37.75287, -122.424559) , status: "In process", description: "This is the second description"},
	3: {name: "Project 3", location: new google.maps.LatLng(37.716743, -122.44), status: "Approved", description: "this is the third description"},
	4: {name: "Project 4", location: new google.maps.LatLng(37.72561, -122.4316), status: "In process", description: "This is the fourth description"}
};

*/



var projects = [
	{id: 5, name: "Project 1", location: new google.maps.LatLng(37.77887, -122.426729), status: "In process", description: "This is the first description."},
	{id: 1, name: "Project 2", location: new google.maps.LatLng(37.75287, -122.424559) , status: "In process", description: "This is the second description"},
	{id: 2, name: "Project 3", location: new google.maps.LatLng(37.716743, -122.44), status: "Approved", description: "this is the third description"},
	{id: 3, name: "Project 4", location: new google.maps.LatLng(37.72561, -122.4316), status: "In process", description: "This is the fourth description"}
];

var data = $.getJSON("housing.json", function(data) {
    for ( var i in data){
    	for (var e in data[i][1]){
    		for (var j in data[i][1][e]){
    			for (var x in data[i][1][e][j]){
	    			console.log(data[i][1][e][j][x]);	
    			}	
    		}
    	}
   }
});



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
	for (i = 0; i < data.length; i++){
			data[i] = new google.maps.Marker({
			position: data[i].location,
			map: map,
			draggable: false,
			title: data[i].name,
			animation: google.maps.Animation.DROP
			});
	}

}



google.maps.visualRefresh=true;



google.maps.event.addDomListener(window, 'load', initialize);






