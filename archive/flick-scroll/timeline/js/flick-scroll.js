
// Flick-Scroll by @simurai


$(document).ready(function() {	
	
	var startY,
	  endY,
	  time,
	  current = 1;

	// on press
  $("#scroller").on("mousedown touchstart", function(e){
    startY = e.pageY || e.originalEvent.touches[0].pageY;
    time = e.timeStamp;
    current = e.target.parentElement.attributes[0].value;
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
      
      //flick up
      if( startY < endY ) {
      	current--;
      
      //flick down
      } else { 
      	current++;
      }
      
      iScroll.options.momentum = false;
      iScroll.scrollToElement('figure:nth-child('+ current +')', 200);
      
    
    // or add momentum when no flick is detected
		} else {
		  iScroll.options.momentum = true;
		}
				
	});
		
	
	// init iScroll
	setTimeout(function () {
	  iScroll = new iScroll('wrapper', {
	    hScrollbar: false, 
	    vScrollbar: false 
	  });
	}, 1000); // needs a timeout to wait for the DOM

});


