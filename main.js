$(document).on('ready', function() {
  	$(".container").on('click', function(e) {

  		var x = event.pageX;
  		var y = event.pageY;
  		//$(this).append('<p> Here we are</p>');   
  		$(this).attr('id', '').addClass('pointer').css({
  			top: x,
  			left: y
  		}).appendTo('.container');
  	});



});