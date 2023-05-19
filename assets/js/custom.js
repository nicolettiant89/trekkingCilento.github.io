function copyToClipboard(source) {
  // Get the text field
  var copyText =  $("#contactSpan").text();

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText);
  source = '#'+source;
  // Alert the copied text
  $(source).text("Copiato!");
  setTimeout(function(){
  $(source).text('');
}, 1000);
}


function addSlideBachground(){
	for(var i=1; i<=6; i++){
		$('#path01_slide0'+i).css('background-image', 'url(\''+$('#path01_img0'+i).attr('src')+'\')');
		$('#path01_slide0'+i).css('background-repeat', 'no-repeat');
		$('#path01_slide0'+i).css('background-size', 'cover');
	}
	
	for(var i=1; i<=6; i++){
		$('#path02_slide0'+i).css('background-image', 'url(\''+$('#path02_img0'+i).attr('src')+'\')');
		$('#path02_slide0'+i).css('background-repeat', 'no-repeat');
		$('#path02_slide0'+i).css('background-size', 'cover');
	}
}

function removeSlideBackground(){
	for(var i=1; i<=6; i++){
		$('#path01_slide0'+i).css('background-image','');
		$('#path01_slide0'+i).css('background-repeat', '');
		$('#path01_slide0'+i).css('background-size', '');
	}
	
	for(var i=1; i<=6; i++){
		$('#path02_slide0'+i).css('background-image','');
		$('#path02_slide0'+i).css('background-repeat', '');
		$('#path02_slide0'+i).css('background-size', '');
	}
}


var bounds = [
    {min:0,max:736,func:addSlideBachground},
    {min:737,func:removeSlideBackground}
];

var resizeFn = function(){
    var lastBoundry; // cache the last boundry used
    return function(){
        var width = window.innerWidth;
        var boundry, min, max;
        for(var i=0; i<bounds.length; i++){
            boundry = bounds[i];
            min = boundry.min || Number.MIN_VALUE;
            max = boundry.max || Number.MAX_VALUE;
            if(width > min && width < max 
               && lastBoundry !== boundry){
                lastBoundry = boundry;
                return boundry.func.call(boundry);            
            }
        }
    }
};
$(window).resize(resizeFn());
$(document).ready(function(){
	resizeFn()();
    $(window).trigger('resize');
});