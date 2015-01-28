$(document).on('ready', function() {
		$(document).on("dblclick", ".mapclass", function() {
				$('.mapclass').remove();
				event.stopProgration();


		});

    $(document).on('dblclick', function(event) {

      var x = event.pageX;
      var y = event.pageY;
      //$(this).append('<p> Here we are</p>');   
      var marker = $("<div class='mapclass'>You are here</div>");
      var noteText = "";
      //var noteBox ;
      var markerText = $("<div class='notes'>enter notes here: <input type='text'> <input type = 'submit'></div>");
      marker.append(markerText);
      markerText.find("[type=submit]").on('click', function () {
        noteText = markerText.find("[type=text]").val();
        console.log("We got here " + noteText);
        var noteBox = $("<div class = 'noteBox'> " + noteText + "</div>");
        console.log("textbox ", noteBox);
        marker.append(noteBox);
        console.log()
      })
        
    
      //console.log("this us", noteText);
      marker.css({position: "absolute", top: y, left: x});

      $(".container").append(marker);



  		// $(this).append('id', 'div').addClass('pointer').css({
  		// 	top: x,
  		// 	left: y
  		// }).appendTo('.container');
  	});



});