const dropdownGradientHandler = () => {
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

export const headerHandler = () => {
	if ($(window).scrollTop() > 50) {
		$('.header-text').css('color', '#000');
		$('.header-panel-bg').css('opacity', '1');
		$('.ham-li').css('backgroundColor', '#000');

		if (window.innerWidth >= 1100) {
			$('.dropdown-content').css('background-color', '#fff');
		}
	} else {
		$('.header-text').css('color', '#fff');
		$('.header-panel-bg').css('opacity', '0');
		$('.ham-li').css('backgroundColor', '#fff');

		if (window.innerWidth >= 1100) {
			$('.dropdown-content').css('backgroundColor', 'rgba(0,0,0,0)');
		}
	}

	dropdownGradientHandler();

	// Отключение slideToggle от jQuery на desktop разрешении
	if (window.innerWidth > 1100) {
		$('.menu-list').removeAttr('style');
	}

	// Черный цвет в мобильном меню
	if (window.innerWidth <= 1100) {
		$('.menu-list .header-text').removeAttr('style');
	}
};

export const aandopenListener = () => {
	$('.aandopen-light, .aandopen-dark').click(function() {
		$(this).toggleClass('aandopen_active');

		const infoDropdownId = $(this).attr('data-info-id');
		const infoDropdown = $(`#${infoDropdownId}`);

		if (infoDropdown.length > 0) {
			infoDropdown.toggleClass('info-dropdown-active');
		} else {
			console.error('No such info dropdown with id: ', infoDropdownId);
		}
	});
};

export const verticalHeightHandler = () => {
	// code for proper 100 vh
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
};

export const slickSliderInitial = () => {
	$('.slider').slick({
		dots: true,
		nextArrow: `<div class="slider-arrow arrow-next main-arrow">
				<div>
					<i class="fa fa-angle-right"></i>
				</div>
			</div>`,
		prevArrow: `<div class="slider-arrow arrow-prev main-arrow">
				<div>
					<i class="fa fa-angle-left"></i>
				</div>
			</div>`,
	});
};
