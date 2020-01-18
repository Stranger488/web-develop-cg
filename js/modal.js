$(document).ready(() => {
	const modal = $('.modal-fade');
	const innerModal = modal.find('#modal-content');

	modal
		.children()
		.children('.modal-close')
		.click(() => {
			modal.toggleClass('modal-active');
			$('body').removeAttr('style');
			innerModal.html('');
			modal
				.children()
				.children('.content-loading')
				.toggleClass('content-loaded');
		});

	$('.jsModalTrigger').click(function() {
		modal.toggleClass('modal-active');
		$('body').css('overflow-y', 'hidden');

		const contentImg = $(this)
			.attr('src')
			.replace('x1', 'x2');
		const descriptionId = $(this).attr('id') + '-desc';
		const description = $(this)
			.siblings(`#${descriptionId}`)
			.text();
		console.log('test:', contentImg);
		innerModal.append(`<img class="modal-content-img" src="${contentImg}">`);
		innerModal.append(`<div class="modal-content-description">${description}</div>`);
		innerModal.children('.modal-content-img').load(function() {
			modal
				.children()
				.children('.content-loading')
				.toggleClass('content-loaded');
		});
	});
});
