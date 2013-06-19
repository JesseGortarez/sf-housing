$(document).ready(function(){




$.getJSON('housing2.json', function(data) {
  var items = [];
 
  $.each(data, function(key, val) {
  	
		var re = /\(.+\)/;

		items.push('<li class="' + key + '">' + val["Location 1"].match(re) + '</li>');  	
  

    
    
      
  });
 
  $('<ul/>', {
    'class': 'my-new-list',
    html: items.join('')
  }).appendTo('.data-json');
});
	
		
	
});







