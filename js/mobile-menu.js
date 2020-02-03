class MobileHamburger {
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

export default class MobileMenu {
	constructor() {
		this.mobileMenu = $('#mobileMainMenu');
		this.currentPage = this.mobileMenu;

		this.hamburger = new MobileHamburger(this.toggle.bind(this));
	}

	bootstrap() {
		this.hamburger.bootstrap();
		// Используется стрелочная функция для прокидывания this объекта вместо JQuery
		$('.jsMobileMenu-label').click((event) => {
			if (window.innerWidth >= 1100) return;
			// Так как архитектура верстки подменю иерархическая - необходимо прервать
			// bubbling события, чтобы не сработали обработчики выше (несмотря на то, что
			// элементы не попадают в область клика - они обрабатывают событие по иерархии)
			event.stopPropagation();

			// Получение значения translateX из значения transform: matrix( , , , , , )
			let offset = parseInt(this.mobileMenu.css('transform').split(',')[4]) || 0;
			// event.currentTarget - замена this
			const previousPageId = $(event.currentTarget).attr('data-back');
			let nextPage = null;

			if (previousPageId) {
				if (previousPageId === 'mobileMainMenu') {
					nextPage = this.mobileMenu;
				} else {
					nextPage = this.mobileMenu.find(`#${previousPageId}`);
				}
				offset += 200;
			} else {
				nextPage = $(event.target).siblings('.jsMobileMenu-menu');
				if (nextPage.length === 0) {
					nextPage = $(event.target).children('.jsMobileMenu-menu');
				}
				offset -= 200;
			}

			// Если пользователь часто свайпает - transform будет не успевать выполниться
			offset = offset - (offset % 200);

			if (nextPage.length === 0) return;

			nextPage.addClass('dropdown-content-active');
			this.mobileMenu.css('transform', `translateX(${offset}px)`);
			this.currentPage.removeClass('dropdown-content-active');

			this.currentPage = nextPage;
		});
	}

	refresh() {
		this.currentPage.removeClass('dropdown-content-active');
		this.mobileMenu.css('transform', `translateX(0)`);
		this.currentPage = this.mobileMenu;
	}

	toggle() {
		$('.menu-list').slideToggle();
		setTimeout(this.refresh.bind(this), 320);
	}

	closeIfOpen() {
		this.hamburger.closeIfOpen();
	}
}
