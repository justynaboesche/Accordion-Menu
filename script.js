const accordion = document.querySelector('.accordion');
const accordionBtns = document.querySelectorAll('.accordion-btn');

function openAccordionItems() {
	if (this.nextElementSibling.classList.contains('active')) {
		this.nextElementSibling.classList.remove('active');
	} else {
		closeAccordionItems();
		this.nextElementSibling.classList.toggle('active');
	}
}

const closeAccordionItems = () => {
	const allActiveItems = document.querySelectorAll('.accordion-info');
	allActiveItems.forEach(item => item.classList.remove('active'));
};

accordionBtns.forEach(btn => btn.addEventListener('click', openAccordionItems));
