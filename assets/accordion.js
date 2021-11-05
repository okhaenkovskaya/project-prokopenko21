class AccordionComponent extends HTMLElement {
  constructor() {
    super();

    this.accordion = this.querySelector('.element');
    this.btn = this.querySelector('.btn-element');
    this.accordions = document.querySelectorAll('.element');

    this.btn.addEventListener('click', this.onButtonClick.bind(this));

    this.initPages()
  }

  initPages() {

    if(!this.accordion.length === 0) return;
    this.closeAllElements();

  }

  closeAllElements() {
    this.accordions.forEach(accordion =>{
      accordion.classList.remove('active');
    });
  }

  onButtonClick(event) {
    event.preventDefault();

    if (this.accordion.classList.contains('active')) {
      this.accordion.classList.remove('active');

    } else {
      this.closeAllElements();
      this.accordion.classList.add('active');
    }
  }
}

customElements.define('accordion-component', AccordionComponent);
