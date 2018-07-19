/*global $ ,alert , console, active */

$(function () {
    'use strict';  
    
    $('.header').height($(window).height());
    $(window).resize(function () {
         
        $('.header').height($(window).height());
        
    });
    $('.links li').click(function () {
        
        $(this).addClass('active').siblings().removeClass('active');
        
    });
         $('.slider').each(function () {
           $(this).css('paddingTop', ($(window).height() - $('.slider li').height()) / 2);
      });
    
      $('.slider').bxSlider({
          pager: false
          
      });
    $('.links li a').click(function(){
        $('html,body').animate({
        scrollTop :$('#'+ $(this).data('value')).offset().top
        },1000)
    });
    (function autoSlider(){
         $('.test .toverlay .slider .active').each(function(){
             if(!$(this).is(':last-child')){
                 
                $(this).delay(3000).fadout(1000,function(){
                    
                $(this).removeClass('active').next().addClass('active').fadeIn();
                 autoSlider();
                    
             });
             } else{
                 $(this).delay(3000).fadout(1000,function(){
                     $(this).removeClass('active');
                     $('.slider div').eq(0).addClass('active').fadeIn();
                     autoSlider();
                     
                 });
                
             }
         });
        
    }());
    var mixer = mixitup('#contain');
	var mixer = mixitup(contain);
	var mixer = mixitup(contain, {
    selectors: {
        target: '.blog-item'
    },
    animation: {
        duration: 300
    }
				

});
	
	//trigerr nice scroll
	
	$("html").niceScroll({
		
		cursorcolor: '#1abc9c',
		cursorwidth: '10px',
		cursorborder: '1px solid #1abc9c'
	});
	  
    
   // $('#contain').mixitup();
});

   
  