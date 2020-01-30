const initialHandlers = () => {
	if (window.innerWidth > 500) {
		// $('.menu-list').css('background-color', 'rgba(0,0,0,0)');
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

	// gradient in dropdown
	if (window.innerWidth >= 1100) {
		if ($(window).scrollTop() > 50) {
			$('.dropdown-content-background').css('background-image', 'none');
		} else {
			$('.dropdown-content-background').css(
				'background-image',
				'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.55) 30%)',
			);
		}
	} else {
		// no gradient in dropdown for small resolutions
		$('.dropdown-content-background').css('background-image', 'none');
	}
};

$(document).ready(() => {
	initialHandlers();

	$('.aandopen-light').click(function() {
		$(this).toggleClass('aandopen_active');
	});
	$('.aandopen-dark').click(function() {
		$(this).toggleClass('aandopen_active');
	});

	// TODO: Попробовать разобраться с проблемой CORS или же найти другой способ нахождения высоты контента iframe
	// const formIframe = document.getElementById('contact-form');
	// formIframe.addEventListener('load', () => {
	// 	formIframe.style.height = formIframe.contentWindow.document.body.offsetHeight + 'px'
	// });
});
$(window).resize(initialHandlers);

const scrollHeaderHandler = () => {
	// gradient in dropdown
	if (window.innerWidth >= 1100) {
		if ($(window).scrollTop() > 50) {
			$('.dropdown-content-background').css('background-image', 'none');
		} else {
			$('.dropdown-content-background').css(
				'background-image',
				'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.55) 30%)',
			);
		}
	} else {
		// no gradient in dropdown for small resolutions
		$('.dropdown-content-background').css('background-image', 'none');
	}

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
