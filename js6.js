/*
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
*/





$(function() {

	
	$('.info, .info-div').click(function(){
		$('.info-div').removeClass('no-show');
		$('.info-div').toggleClass("info-div-anim");
	});

	
	
	var sf = new google.maps.LatLng(37.757687, -122.437649);
	
   var settings = {
      zoom: 13,
      center: sf,
      disableDefaultUI: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP
   };

   var map = new google.maps.Map(document.getElementById("map-canvas"), settings);
   
   // START GET
   
$.getJSON('housing2.json', function(data) {
  

  $.each(data, function(key, val) {
  		var re = /\(.+\)/;
  		var noPar = /[^\(\)]/g;
  		var loc = val["Location 1"].match(re)[0];
			var numPar = loc.match(noPar).join('');
			var fullNumber = numPar.split(',');
			var lat = fullNumber[0];
			var lng = fullNumber[1];
			
			
					//WTF
			var count = [];
			count.push(1);
	
		var the_marker = new google.maps.Marker({
			title: val["LANDUSE"],
			map: map,
			clickable: true,
			position: new google.maps.LatLng(lat, lng)
		});
		
		var infowindow = new google.maps.InfoWindow({
			content: the_marker.title // $(this).find('description').text();
		});
			
		new google.maps.event.addListener(the_marker, 'click', function() {
			infowindow.open(map, this);
		});		
		
		
		//WTF
		var howWe = Math.floor(10000 / count.length);
		console.log(count.length);
		console.log(howWe);
			
		//$('.meter > span').css('width', howWe + "%" );
		
  });
  
});




   
   
		google.maps.visualRefresh=true;
		   
});







