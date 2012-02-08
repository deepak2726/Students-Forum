jQuery(document).ready(function(){	
	//Back to top slider
    jQuery('a[href=#totop]').click(function(){
        jQuery('html, body').animate({scrollTop:0}, 100);
        return false;
    });
	// Product Slider
    jQuery('#featured-products').jcarousel();

	// FancyBox jQuery
	jQuery("a.group").fancybox({ 'zoomSpeedIn': 400, 'zoomSpeedOut': 400, 'overlayShow': true });

	// Slider Homepage
	jQuery("#slider").easySlider({
		auto: true,
		continuous: true,
		numeric: true
	});
});
