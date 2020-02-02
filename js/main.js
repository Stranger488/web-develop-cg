import { headerHandler, MobileMenu, aandopenHandler } from './menu.js';

const mobileMenu = new MobileMenu();

$(document).ready(() => {
	headerHandler();
	aandopenHandler();

	mobileMenu.bootstrap();
});

$(window).resize(() => {
	mobileMenu.closeIfOpen();

	// Чтобы slideToggle от jQuery не поставил display none после headerHandler
	// (Ф-ии работают асинхронно!)
	setTimeout(headerHandler, 200);
});

$(window).scroll(headerHandler);
