export class MobileHamburger {
	constructor(externalToggleFunc) {
		this.topBar = $('.hamburger li:nth-child(1)');
		this.middleBar = $('.hamburger li:nth-child(2)');
		this.bottomBar = $('.hamburger li:nth-child(3)');

		this.externalToggle = externalToggleFunc;
	}

	toggle() {
		const topBar = this.topBar;
		const middleBar = this.middleBar;
		const bottomBar = this.bottomBar;

		const slickDots = $('.slick-dots');

		if (middleBar.hasClass('rot-45deg')) {
			topBar.removeClass('rot45deg');
			middleBar.removeClass('rot-45deg');
			bottomBar.removeClass('hidden');

			$('#overlay').css({
				'z-index': '0',
				'background-color': 'rgba(0,0,0,0)',
			});
			slickDots.css('z-index', '3');
		} else {
			bottomBar.addClass('hidden');
			topBar.addClass('rot45deg');
			middleBar.addClass('rot-45deg');

			$('#overlay').css({
				'z-index': '1',
				'background-color': 'rgba(0,0,0,0.5)',
			});
			slickDots.css('z-index', '0');
		}
	}

	bootstrap() {
		$('.hamburger-container').click(() => {
			this.toggle();
			this.externalToggle();
		});
	}

	closeIfOpen() {
		if (this.middleBar.hasClass('rot-45deg')) {
			this.toggle();
			this.externalToggle();
		}
	}
}
