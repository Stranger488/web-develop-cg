import { MobileHamburger } from './mobile-menu.js';

const handleGradient = () => {
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

	handleGradient();

	// Отключение slideToggle от jQuery на desktop разрешении
	if (window.innerWidth > 1100) {
		$('.menu-list').removeAttr('style');
	}

	// Черный цвет в мобильном меню
	if (window.innerWidth <= 1100) {
		$('.menu-list .header-text').removeAttr('style');
	}
};

export class MobileMenu {
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

export const aandopenHandler = () => {
	$('.aandopen-light, .aandopen-dark').click(function() {
		$(this).toggleClass('aandopen_active');
	});
};
