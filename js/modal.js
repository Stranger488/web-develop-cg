export default class ModalWindow {
	constructor() {
		this.modal = $('.modal-fade');
		this.innerModal = this.modal.find('#modal-content');
	}

	bootstrap() {
		this.modal
			.children()
			.children('.modal-close')
			.click(() => {
				this.modal.toggleClass('modal-active');
				$('body').removeAttr('style');
				this.innerModal.html('');
				this.modal
					.children()
					.children('.content-loading')
					.removeClass('content-loaded');
			});

		$('.jsModalTrigger').click((event) => {
			const currentElem = event.currentTarget;

			this.modal.toggleClass('modal-active');
			$('body').css('overflow-y', 'hidden');

			const contentImg = $(currentElem)
				.attr('src')
				.replace('x1', 'x2');

			const descriptionId = $(currentElem).attr('id') + '-desc';
			const description = $(currentElem)
				.siblings(`#${descriptionId}`)
				.text();

			this.innerModal.append(`<img class="modal-content-img" src="${contentImg}">`);
			this.innerModal.append(`<div class="modal-content-description">${description}</div>`);
			this.innerModal.children('.modal-content-img').load(() => {
				this.modal
					.children()
					.children('.content-loading')
					.addClass('content-loaded');
			});
		});
	}
}
