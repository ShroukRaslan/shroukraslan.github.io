/* Global $,alert , console*/

$ (function(){
   'use strict';
    // Trigger Nice Scroll Plugin
    
    $('html').niceScroll();
    
    // Change Header Height 
    $('.header').height($(window).height());
    
    $(' .header .arrow i').click(function(){
        
        $('html, body').animate({
             
           scrollTop: $('.features').offset().top
        
    },1000);
   
    });
    
    $('.show-more').click(function(){
        $('.our-works .hidden').fadeIn(); 
        
    });
    
    var leftArrow= $('.testim .fa-chevron-left');
	 var rightArrow= $('.testim .fa-chevron-right');
	function checkclients(){
		
		$('.client:first').hasClass('active') ? leftArrow.fadeOut() : leftArrow.fadeIn();
		$('.client:last').hasClass('active') ? rightArrow.fadeOut() : rightArrow.fadeIn();
	}
	checkclients();
	$('.testim i').click(function(){
		if($(this).hasClass('fa-chevron-right')){
			$('.testim .active').fadeOut(100, function(){
			$(this).removeClass('active').next('.client').addClass('active').fadeIn();
				
				checkclients();
			});
		} else{
			$('.testim .active').fadeOut(100, function(){
			$(this).removeClass('active').prev('.client').addClass('active').fadeIn();
				checkclients();
			});
		}
	});
});