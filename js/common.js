$(function() {

	$('.parallax-window').parallax({imageSrc: '../img/parallax.jpg'});


$('.single-item').slick({
	adaptiveHeight: true,
	dots: true,
	infinite: false,
	fade: true,
	
});

$(".toggle_menu").click(function(){
		$(this).toggleClass("on");
		$(".main_menu").stop().slideToggle();
		return false;
	});

});
