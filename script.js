const accordion = document.querySelector('.accordion');
const accordionBtns = document.querySelectorAll('.accordion-btn');

function openAccordionItems() {

   this.nextElementSibling.classList.toggle('active');
}



accordionBtns.forEach(btn => btn.addEventListener('click', openAccordionItems));
