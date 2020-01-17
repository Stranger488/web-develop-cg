function toggleHamburger() {
	var topBar = $('.hamburger li:nth-child(1)'),
		middleBar = $('.hamburger li:nth-child(2)'),
		bottomBar = $('.hamburger li:nth-child(3)');
	if (middleBar.hasClass('rot-45deg')) {
		topBar.removeClass('rot45deg');
		middleBar.removeClass('rot-45deg');
		bottomBar.removeClass('hidden');

		$('#overlay').css('z-index', '0');
		$('#overlay').css('background-color', 'rgba(0,0,0,0)');
		$('.slick-dots').css('z-index', '3');
	} else {
		bottomBar.addClass('hidden');
		topBar.addClass('rot45deg');
		middleBar.addClass('rot-45deg');

		$('#overlay').css('z-index', '1');
		$('#overlay').css('background-color', 'rgba(0,0,0,0.5)');
		$('.slick-dots').css('z-index', '0');
	}
}
$(document).ready(function() {
	//toggle menu
	$('.hamburger-container').click(function() {
		$('.menu-list').slideToggle();
	});

	//to fix issue that toggle adds style(hides) to nav
	$(window).resize(function() {
		if (window.innerWidth > 1024) {
			$('.menu-list').removeAttr('style');
		}
	});

	//icon animation

	$('.hamburger-container').on('click', function() {
		toggleHamburger();
	});
});

$(window).resize(function() {
	var middleBar = $('.hamburger li:nth-child(2)');
	if (middleBar.hasClass('rot-45deg')) {
		toggleHamburger();
		$('.menu-list').slideToggle();
	}
});
