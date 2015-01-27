$(document).on('ready', function() {
  	$(".container").on('click', function(e) {

  		var x = event.pageX;
  		var y = event.pageY;
  		$(this).append('<p> Here we are</p>');   
  	});



});