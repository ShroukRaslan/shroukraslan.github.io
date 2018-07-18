$(function(){
	'use strict';
	
	var upperH= $('.upper-line').innerHeight(),
		navbrandrH= $('.navbar-brand').innerHeight(),
	    windowH=$(window).height();
	 
	$('.slider, .carousel-item').height(windowH -(navbrandrH+upperH));
	// ffffff
	$('.Feutuerd-work button').on('click',function () {
		$(this).addClass('active').siblings().removeClass('active');
		if ($(this).data('class') === 'All'){
			$('.shuffel-images .col-md-3').css('opacity', 1);
		} else {
		$('.shuffel-images .col-md-3').css('opacity', '.08');
		$($(this).data('class')).parent().css('opacity', 1);
		}
		
	});
		
});