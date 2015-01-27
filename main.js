$(document).on('ready', function() {
  	$(document).on('click', function(event) {

  		var x = event.pageX;
  		var y = event.pageY;
  		//$(this).append('<p> Here we are</p>');   
  		var marker = $("<div class='mapclass'>You are here</div>");


  		marker.css({position: "absolute", top: y, left: x});

  		$(".container").append(marker);

  		$(document).on("click", ".mapclass", function() {
  				$('.mapclass').remove();
  				event.stopProgration();


  		});

  		// $(this).append('id', 'div').addClass('pointer').css({
  		// 	top: x,
  		// 	left: y
  		// }).appendTo('.container');
  	});



});