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
		setTimeout(mobileMenu.refresh.bind(mobileMenu), 320);
	});

	$('.jsDropdownLabel').click(function() {
		let list = $(this).siblings('.jsDropdownList');
		let icon = $(this).siblings('.dropdown-submenu-icon-mobile');
		if (icon.length === 0) {
			icon = $(this).children('.dropdown-submenu-icon-mobile');
		}

		if (list.hasClass('dropdown-content-open')) {
			list.removeClass('dropdown-content-open');
			icon.removeClass('dropdown-submenu-icon-mobile-open');
		} else {
			list.addClass('dropdown-content-open');
			icon.addClass('dropdown-submenu-icon-mobile-open');
		}
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
