
// Cycle Button by simurai

var currentFont = 1;
var currentSide;

$(document).ready(function() {	
	    

    var nextFont = function() {
    	var oldFont = "font" + currentFont;
    	if(currentFont >= 3) {
    		currentFont = 1;
    	} else {
    		currentFont++;
    	}
    	var newFont = "font" + currentFont;
    	$('#title').removeClass( oldFont ).addClass( newFont );
    	
    	$('.stepper .active').removeClass( "active" );
    	var newActive = ".stepper span:nth-child("+ currentFont +")";
    	$(newActive).addClass( "active" );
    };
    
    
    
    var setFont = function(nr) {
    	var oldFont = "font" + currentFont;
    	currentFont = nr;
    	var newFont = "font" + currentFont;
    	$('#title').removeClass( oldFont ).addClass( newFont );
    	
    	$('.multi .active').removeClass( "active" );
    	var newActive = ".multi button:nth-child("+ currentFont +")";
    	$(newActive).addClass( "active" );
    };
    
    
    //init
    
    $('.stepper').click(function() {
    	nextFont();
    	if(currentSide != "stepper") {
    		currentSide == "stepper";
    		$('.multi .active').removeClass( "active" );
    	}
    });
    
   
    
    
    $('.multi button').each( function($i) {
    	
    	$(this).click(function() {
    		setFont($i+1);
    		if(currentSide != "multi") {
    			currentSide == "multi";
    			$('.stepper .active').removeClass( "active" );
    		}
    	});
    	
    });
    
		

});



