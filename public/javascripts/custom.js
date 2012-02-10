jQuery(document).ready(function(){	
	//Back to top slider
    jQuery('a[href=#totop]').click(function(){
        jQuery('html, body').animate({scrollTop:0}, 1000);
        return false;
    });
	// Product Slider
    jQuery('#featured-products').jcarousel();

	// FancyBox jQuery
	jQuery("a.group").fancybox({ 'zoomSpeedIn': 600, 'zoomSpeedOut': 600, 'overlayShow': true });

	// Slider Homepage
	jQuery("#slider").easySlider({
		auto: true,
                pause:7000,
		continuous: true,
		numeric: true
	});
});
