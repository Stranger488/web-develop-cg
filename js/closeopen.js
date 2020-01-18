const classNames = {
	infoDropdown: 'info-dropdown',
	dropdownActive: 'info-dropdown_active',
};

function closeopen(id) {
	$(this).toggleClass("aandopen_active");
	/*Для создания раскрывающихся по клику кнопочек*/
	const element = document.getElementById(id);
	if (element) {
		// element.style.display = element.style.display === "none" ? "" : "none";
		if (element.classList.contains(classNames.infoDropdown)) {
			if (element.classList.contains(classNames.dropdownActive)) {
				element.classList.remove(classNames.dropdownActive);
			} else {
				element.classList.add(classNames.dropdownActive);
			}
		}
	}
}
