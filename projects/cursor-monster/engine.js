
// Cursor Monster by simurai


$(document).ready(function() {	
	
	var status = "sleep";
	var mouthOpen = false;
	var count = 0;
		
	
	// on mouse move
	
	$(document).mousemove(function(e){		
		
		
		var docW = $(window).width();
		var docH = $(window).height();
		
		var diffX = (docW/2) - e.clientX;
		var diffY = (docH/2)-100 - e.clientY;
		
		var dist = distance(docW/2,docH/2, e.clientX, e.clientY);
		var distM = distance(docW/2,(docH/2)+60, e.clientX, e.clientY);
		
		
		if (status == "sleep") {
			
			if(distM < 200) {
				$('#wrapper').removeClass("sleep").addClass("hungry");
				status = "hungry";
				playAudio("audio-ohh");
			}
			
			
		} else if (status == "hungry") {
		
			// eye		
							
			var eye_background = Math.floor( diffX /-30 ) +'px '+ Math.floor( diffY /-30 ) +'px';		
			var eye_translate =	Math.floor(diffX/-50 )+'px, '+ Math.floor(diffY/-100 )+'px';	
			$(".eye").css({ 			"background-position":eye_background, "-webkit-transform":'translate3d('+eye_translate+',0)', 			"-moz-transform":'translate('+eye_translate+')' });
			$(".eye:first-child").css({	"background-position":eye_background, "-webkit-transform":'translate3d('+eye_translate+',0) scale(.6)', "-moz-transform":'translate('+eye_translate+') scale(.6)' });
			
			
			// eye lid
			
			var eye_lid_p = 100+Math.floor( diffY /-20 );
			var eye_lid = '-webkit-gradient(radial, 50% '+ eye_lid_p +'%, 20, 50% '+ eye_lid_p +'%, 50, color-stop(.5, rgba(0,0,0,0)), color-stop(.6, rgba(0,0,0,1)))';
			$(".lid").css({ "-webkit-mask-image":eye_lid });
			
			
			// mouth
			
			if (distM > 200) {
				if(mouthOpen) {
					mouthOpen = false;
					$('#mouth').addClass("out");
					var mouth_height = "20px";
					count = 0;
				}
			} else {				
				var mouth_height = 80 - Math.floor(distM /3)+'px';
				if(!mouthOpen) {
					mouthOpen = true;
					$('#mouth').removeClass("out");
				}
			}
			var mouth_transform = Math.floor(diffX/-80 )+'px, '+ Math.floor(diffY/-80 )+'px';
			$("#mouth").css({ "height":mouth_height, "-webkit-transform":'translate3d('+mouth_transform+', 0)', "-moz-transform":'translate('+mouth_transform+')' });
			
				
							
			
			
			// snap cursor
			
			if(distM < 30 && count > 50) {
				count = 0;
				$("#mouth").css({ "height":"", "-webkit-transform":"", "-moz-transform":"" });
				$("body").css({ "cursor":"none" });
				
				$('#wrapper').removeClass("hungry").addClass("eat");
				playAudio("audio-snap");
				status = "eat";				
			} else {
				count++;			
			}
			
		
		} else if (status == "eat") {
			
			if(distM > 120) {
				$('#wrapper').removeClass("eat").addClass("hungry");
				$("body").css({ "cursor":"" });
				status = "hungry";
				playAudio("audio-ohh");
			}
						
		};
		
				
    });
    

		

});




// helpers

var distance = function(x1, y1, x2, y2){
	return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
};


var playAudio = function(id) {    	
	try {
        var a = document.getElementById(id);  
		a.currentTime = 0;
		a.play();
    } catch(e) {
        //$("#debug").html(e);
    } 
};

