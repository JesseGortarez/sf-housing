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
		
		google.maps.event.addListener(projects[i], "click", function(){
		infoWindow.setContent("Test");
		infoWindow.open(map, projects[i]);
		});
}

function addMarker(){
	for (i = 0; i < projects.length; i++){
			projects[i] = new google.maps.Marker({
			position: projects[i].location,
			map: map,
			draggable: false,
			title: projects[i].name,
			animation: google.maps.Animation.DROP
			});
		
		
		projects[i] = new google.maps.InfoWindow({
			content: projects[i].description
			});		
	}

}


/*
for (i = 0; i < projects.length; i++){
	console.log(projects[i].name.getTitle());
	google.maps.event.addListener(projects[i].location, "click", function(){
		var infoWindow = new google.maps.InfoWindow({
			content: "This is a test"
		});
		infoWindow.open(map, projects[i].location);	
	}
);	
}
*/





/*

google.maps.event.addListener(marker, "click", function(){
		infoWindow.setContent("Test");
		infoWindow.open(map, marker);
});
*/





/*

function addMarker(){
	for (i in projects){
			projects.i = new google.maps.Marker({
			position: projects.i.location,
			map: map,
			draggable: false,
			title: i.name,
			animation: google.maps.Animation.DROP
			});
		console.log(projects.i);
	}

}
*/

/*
function addMarker(){


for (i in projects){
	for (e in i){
		i.e.name = new google.maps.Marker({
			position: e.location,
			map: map,
			draggable: false,
			title: e.name,
			animation: google.maps.Animation.DROP
		});
			console.log(projects.i);
	}
}


}
*/


 google.maps.visualRefresh=true;



google.maps.event.addDomListener(window, 'load', initialize);






