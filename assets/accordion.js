if (!customElements.get('accordion-component')) {
  class AccordionComponent extends HTMLElement {
    constructor() {
      super();

      this.accordions = this.querySelectorAll('.accordion__slide');
      this.btns = this.querySelectorAll('.accordion__btn-opener');

      this.btns.forEach(btn => {
        btn.addEventListener('click', this.onButtonClick.bind(this));
      });

      this.initPages();
    }

    initPages() {
      this.accordions.forEach(accordion => {
        let elemText =  accordion.querySelector('.accordion__text');

        if (!accordion.classList.contains('active')) {
          this.slideUp(elemText, 100);
        }
      });
    }

    closeAllElements() {
       this.accordions.forEach(accordion => {
         let elemText =  accordion.querySelector('.accordion__text');

          if (accordion.classList.contains('active')) {
            accordion.classList.remove('active');
            this.slideUp(elemText);
          }
       });
    }

    slideUp(target, duration = 500) {
      target.style.transitionProperty = 'height, margin, padding';
      target.style.transitionDuration = duration + 'ms';
      target.style.boxSizing = 'border-box';
      target.style.height = target.offsetHeight + 'px';
      target.offsetHeight;
      target.style.overflow = 'hidden';
      target.style.height = 0;
      target.style.paddingTop = 0;
      target.style.paddingBottom = 0;
      target.style.marginTop = 0;
      target.style.marginBottom = 0;
      window.setTimeout( () => {
        target.style.display = 'none';
        target.style.removeProperty('height');
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
      }, duration);
    }

    slideDown(target, duration = 500) {
      target.style.removeProperty('display');
      let display = window.getComputedStyle(target).display;

      if (display === 'none')
        display = 'block';

      target.style.display = display;
      let height = target.offsetHeight;
      target.style.overflow = 'hidden';
      target.style.height = 0;
      target.style.paddingTop = 0;
      target.style.paddingBottom = 0;
      target.style.marginTop = 0;
      target.style.marginBottom = 0;
      target.offsetHeight;
      target.style.boxSizing = 'border-box';
      target.style.transitionProperty = "height, margin, padding";
      target.style.transitionDuration = duration + 'ms';
      target.style.height = height + 'px';
      target.style.removeProperty('padding-top');
      target.style.removeProperty('padding-bottom');
      target.style.removeProperty('margin-top');
      target.style.removeProperty('margin-bottom');
      window.setTimeout( () => {
        target.style.removeProperty('height');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
      }, duration);
    }

    onButtonClick(event) {
      event.preventDefault();
      let elem =  event.target.closest('.accordion__slide');
      let elemText =  elem.querySelector('.accordion__text');

      if (elem.classList.contains('active')) {
        elem.classList.remove('active');
        this.slideUp(elemText);

      } else {
        this.closeAllElements();
        elem.classList.add('active');
        this.slideDown(elemText);
      }
    }
  }
  customElements.define('accordion-component', AccordionComponent);

}