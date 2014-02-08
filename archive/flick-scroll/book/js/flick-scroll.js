
// Flick-Scroll by @simurai


$(document).ready(function() {	
	
	var startX,
	  startY,
	  endY,
	  dotY,
	  height = $(window).height(),
	  time;

	// on press
  $("#scroller").on("mousedown touchstart", function(e){
    startX = e.pageX || e.originalEvent.touches[0].pageX;
    startY = e.pageY || e.originalEvent.touches[0].pageY;
    dotY = (iScroll.y*-1) + startY;
    time = e.timeStamp;
    iScroll.options.momentum = false;
  });

	
	// on release
	$("#scroller").on("mouseup touchend", function(e){		
    
    endY = e.pageY || e.originalEvent.changedTouches[0].pageY;
    var diffY = startY - endY;
    if(diffY < 0) {
      diffY = diffY*-1; 
    }  
    var timeDiff = e.timeStamp - time;
    
    
    // detect if it's a flick or just normal scrolling -> flick = short in time, short distance
		if( timeDiff < 200 && diffY < 200 ) {
      $("#dot").css( {"top": dotY, "left": startX } );			
      $("#dot").addClass("show");
      
      //flick up
      if( startY < endY ) {
      	iScroll.scrollTo(0, endY-height+50, 200, true);
      
      //flick down
      } else { 
      	iScroll.scrollTo(0, endY - 50, 200, true);
      }
      
      setTimeout( function() {
        $("#dot").removeClass("show");
      }, 300);
    
    
    // or add momentum when no flick is detected
		} else {
		  iScroll.options.momentum = true;
		}
				
	});
	
	
	// add dot
	$("#scroller").append('<div id="dot"></div>');
	
	
	// init iScroll
  setTimeout(function () {
  		iScroll = new iScroll('wrapper', {
  		  hScrollbar: false
  		});
  }, 1000); // needs a timeout to wait for the DOM
	
	

});


