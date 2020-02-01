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

class MobileMenu {
	constructor() {
		this.mobileMenu = $('#mobileMainMenu');
		this.currentPage = this.mobileMenu;
	}

	bootstrap() {
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
				offset -= 200;
			} else {
				nextPage = $(event.target).siblings('.jsMobileMenu-menu');
				if (nextPage.length === 0) {
					nextPage = $(event.target).children('.jsMobileMenu-menu');
				}
				offset += 200;
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
}

const mobileMenu = new MobileMenu();

$(document).ready(() => {
	initialHandlers();

	$('.aandopen-light').click(function() {
		$(this).toggleClass('aandopen_active');
	});
	$('.aandopen-dark').click(function() {
		$(this).toggleClass('aandopen_active');
	});

	mobileMenu.bootstrap();
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
