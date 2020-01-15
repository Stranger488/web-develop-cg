const initialHandlers = () => {
	if (window.innerWidth > 1100) {
		$('.dropdown').hover(
			function() {
				$('#overlay').css({
					'z-index': '1',
					'background-color': 'rgba(0,0,0, 0.5)',
				});
			},
			function() {
				// on mouseout, reset the background colour
				$('#overlay').css({
					'z-index': '0',
					'background-color': 'rgba(0,0,0,0)',
				});
			},
		);
	}

	if (window.innerWidth > 500) {
		$('.menu-list').css('background-color', 'rgba(0,0,0,0)');
		$('.header-text').css('color', '#fff');
		$('.whiteBg').css('backgroundColor', 'rgba(0,0,0,0)');
	} else {
		$('.header-text').css('color', '#000');
		$('.whiteBg').css('backgroundColor', 'rgba(255,255,255,1)');
	}

	if (window.innerWidth < 1100 && $(window).scrollTop() > 50) {
		$('.whiteBg').css('backgroundColor', 'rgba(255,255,255,1)');
	} else {
		$('.whiteBg').css('backgroundColor', 'rgba(0,0,0,0)');
	}

	if (window.innerWidth < 1100) {
		$('.menu-list .whiteBg').removeAttr('style');
		$('.menu-list .header-text').removeAttr('style');
	}
};

$(document).ready(initialHandlers);
$(window).resize(initialHandlers);

const scrollHeaderHandler = () => {
	if ($(window).scrollTop() > 50) {
		$('.header-panel-bg').css('opacity', '1');

		if (window.innerWidth > 500) {
			$('.header-text').css('color', '#000');

			if (window.innerWidth < 1100) {
				$('.whiteBg').css('backgroundColor', '#fff');
			} else {
				$('.dropdown-content').css('backgroundColor', '#fff');
			}
		}

		$('.ham-li').css('backgroundColor', '#000');
	} else {
		if (window.innerWidth > 500) {
			$('.header-text').css('color', '#fff');
			$('.whiteBg').css('backgroundColor', 'rgba(0,0,0,0)');

			if (window.innerWidth < 1100) {
				$('.whiteBg').css('backgroundColor', 'rgba(0,0,0,0)');
				$('.dropdown-content').css('backgroundColor', 'rgba(0,0,0,0)');
			} else {
				$('.dropdown-content').css('backgroundColor', 'rgba(0,0,0,0)');
			}
		}

		$('.header-panel-bg').css('opacity', '0');
		$('.ham-li').css('backgroundColor', '#fff');
	}

	if (window.innerWidth < 1100) {
		$('.menu-list .whiteBg').removeAttr('style');
		$('.menu-list .header-text').removeAttr('style');
	}
};

$(window).load(scrollHeaderHandler);

$(window).scroll(scrollHeaderHandler);
