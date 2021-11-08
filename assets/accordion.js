if (!customElements.get('accordion-component')) {
  class AccordionComponent extends HTMLElement {
    constructor() {
      super();

      this.accordions = this.querySelectorAll('.accordion__slide');
      this.btns = this.querySelectorAll('.accordion__btn-opener');

      this.btns.forEach(btn => {
        btn.addEventListener('click', this.onButtonClick.bind(this));
      });
    }

    closeAllElements() {
       this.accordions.forEach(accordion => {
          if (accordion.classList.contains('active')) {
            accordion.classList.remove('active');
          }
       });
    }

    onButtonClick(event) {
      event.preventDefault();
      let elem =  event.target.closest('.accordion__slide');

      if (elem.classList.contains('active')) {
        elem.classList.remove('active');
      } else {
        this.closeAllElements();
        elem.classList.add('active');
      }
    }
  }
  customElements.define('accordion-component', AccordionComponent);

}