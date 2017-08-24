jQuery(function($) {'use strict';
$("#clients-logo").owlCarousel({
	autoPlay: 3000,
	items : 5,
	itemsDesktop : [1199,5],
	itemsDesktopSmall : [979,5],
});
	//Responsive Nav
	$('li.dropdown').find('.fa-angle-down').each(function(){
		$(this).on('click', function(){
			if( $(window).width() < 768 ) {
				$(this).parent().next().slideToggle();
			}
			return false;
		});
	});


	//Initiat WOW JS
	new WOW().init();

	// portfolio filter
	$(window).load(function(){

		$('.main-slider').addClass('animate-in');
		$('.preloader').remove();
		//End Preloader


		// var $portfolio_selectors = $('.portfolio-filter >li>a');
		//
		// if($portfolio_selectors.length) {
		//
		// 	var $portfolio = $('.portfolio-items');
		// 	$portfolio.isotope({
		// 		itemSelector : '.portfolio-item',
		// 		layoutMode : 'fitRows'
		// 	});
		//
		// 	$portfolio_selectors.on('click', function(){
		// 		$portfolio_selectors.removeClass('active');
		// 		$(this).addClass('active');
		// 		var selector = $(this).attr('data-filter');
		// 		$portfolio.isotope({ filter: selector });
		// 		return false;
		// 	});
		// }

	});





});
