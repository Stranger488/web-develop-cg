import {
	headerHandler,
	aandopenListener,
	verticalHeightHandler,
	slickSliderInitial,
} from './page-handlers.js';
import MobileMenu from './mobile-menu.js';
import ModalWindow from './modal.js';

const mobileMenu = new MobileMenu();
const layoutModalWindow = new ModalWindow();

$(document).ready(() => {
	verticalHeightHandler();
	slickSliderInitial();

	headerHandler();
	aandopenListener();
	mobileMenu.bootstrap();
	layoutModalWindow.bootstrap();
});

$(window).resize(() => {
	verticalHeightHandler();

	mobileMenu.closeIfOpen();
	// Чтобы slideToggle от jQuery не поставил display none после headerHandler
	// (Ф-ии работают асинхронно!)
	setTimeout(headerHandler, 200);
});

$(window).scroll(headerHandler);
