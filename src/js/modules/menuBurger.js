const menuBurger = {
  init() {
    this.burgerBtn = document.querySelector('.header__btn-menu');
    this.closeBtn = document.querySelector('.btn--close');
    this.menu = document.querySelector('.menu');
    this.pageWrapper = document.querySelector('.page-wrapper');
    
    if (this.burgerBtn && this.closeBtn && this.menu) {
      this.bindEvents();
    }
  },

  bindEvents() {
  
    this.burgerBtn.addEventListener('click', () => {
      this.openMenu();
    });
    
   
    this.closeBtn.addEventListener('click', () => {
      this.closeMenu();
    });
    
   
    this.pageWrapper.addEventListener('click', (e) => {
      const isDesktop = window.matchMedia('(min-width: 1120px)').matches;
     
      if (!isDesktop && this.menu.classList.contains('menu--open')) {
       
        if (!e.target.closest('.menu') && !e.target.closest('.header__btn-menu')) {
          this.closeMenu();
        }
      }
    });
  },

  openMenu() {
    this.menu.classList.add('menu--open');
    this.pageWrapper.classList.add('page-wrapper--blur');
    document.body.classList.add('body--lock');
  },

  closeMenu() {
    this.menu.classList.remove('menu--open');
    this.pageWrapper.classList.remove('page-wrapper--blur');
    document.body.classList.remove('body--lock');
  }
};

export default menuBurger;