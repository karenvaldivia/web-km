function playVideo(e) {
	var el = $(e);
	var p = el.parent().parent().parent();
	$('video', p).get(0).play();
}

function menu(){
	var w = $(window).width();
	if($(this).scrollTop() > 10) {
		$('.bg-transparent').addClass('bg-white');
		$('.navbar-brand img').attr('src', 'images/km-logo-negro.svg');
		$('.navbar-toggle img').attr('src', 'images/km-navbar-mobile-negro.svg');
		$('.nav .principal').css('padding','4px');
		$('.navbar-brand>img').css('height','40px');
		$('.nav li:first-child a').addClass('pd-tb5');

		if( w >= 768 ){
			$('a.km-nav-link, .nav-login li a').css('color','black');
		}
	} else {
		$('.bg-transparent').removeClass('bg-white');
		$('.navbar-brand img').attr('src', 'images/km-logo.svg');
		$('.navbar-toggle img').attr('src', 'images/km-navbar-mobile.svg');
		$('.nav .principal').css('padding','15px');
		$('.navbar-brand>img').css('height','60px');
		$('.nav li:first-child a').removeClass('pd-tb5');
		if( w >= 768 ){
			$('a.km-nav-link, .nav-login li a').css('color','white');
		}
	}
}

$(window).resize(function() {
	menu();
});

$(document).ready(function(){
	menu();

	$(window).scroll(function() {
		menu();
	});

	$('.bxslider').bxSlider({
	  buildPager: function(slideIndex){
		switch(slideIndex){
		  case 0:
			return '<img src="images/km-testimoniales/thumbs/testimonial-1.jpg">';
		  case 1:
			return '<img src="images/km-testimoniales/thumbs/houses.jpg">';
		  case 2:
			return '<img src="images/km-testimoniales/thumbs/tree_root.jpg">';
		}
	  }
	});

	$('.km-opcion').on('click', function(e) {
		$(this).toggleClass('optionactive');
	});

	var $date_f = $(".date_from");
	var $date_t = $(".date_to");

	$date_f.datepicker({
		language: 'es',
		onSelect: function (fd, date) {
			$date_t.data('datepicker').update('minDate', date);
			$date_t.focus();
		}
	});

	$date_t.datepicker({
		language: 'es',
		onSelect: function (fd, date) {
			$date_f.data('datepicker').update('maxDate', date);
		}
	});
});