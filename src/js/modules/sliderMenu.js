const sliderMenu = {
  init() {
    this.menuContainer = document.querySelector('.slider-menu__container');
    this.menuItems = document.querySelectorAll('.slider-menu__item');
    this.activeClass = 'slider-menu__link--active';

    if (this.menuContainer && this.menuItems.length) {
      this.bindEvents();
    }
  },

  bindEvents() {
   
    this.menuItems.forEach(item => {
      const link = item.querySelector('.slider-menu__link');
      if (link) {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          this.setActiveItem(link);
        });
      }
    });

    
    let isDown = false;
    let startX;
    let scrollLeft;

    this.menuContainer.addEventListener('mousedown', (e) => {
      isDown = true;
      this.menuContainer.classList.add('slider-menu__container--active');
      startX = e.pageX - this.menuContainer.offsetLeft;
      scrollLeft = this.menuContainer.scrollLeft;
    });

    this.menuContainer.addEventListener('mouseleave', () => {
      isDown = false;
      this.menuContainer.classList.remove('slider-menu__container--active');
    });

    this.menuContainer.addEventListener('mouseup', () => {
      isDown = false;
      this.menuContainer.classList.remove('slider-menu__container--active');
    });

    this.menuContainer.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - this.menuContainer.offsetLeft;
      const walk = (x - startX) * 2;
      this.menuContainer.scrollLeft = scrollLeft - walk;
    });

   
    this.menuContainer.addEventListener('touchstart', (e) => {
      startX = e.touches[0].pageX - this.menuContainer.offsetLeft;
      scrollLeft = this.menuContainer.scrollLeft;
    });

    this.menuContainer.addEventListener('touchmove', (e) => {
      if (e.touches.length !== 1) return;
      const x = e.touches[0].pageX - this.menuContainer.offsetLeft;
      const walk = (x - startX) * 2;
      this.menuContainer.scrollLeft = scrollLeft - walk;
    });
  },

  setActiveItem(clickedLink) {
   
    this.menuItems.forEach(item => {
      const link = item.querySelector('.slider-menu__link');
      if (link) {
        link.classList.remove(this.activeClass);
      }
    });

   
    clickedLink.classList.add(this.activeClass);

   
    const itemRect = clickedLink.parentElement.getBoundingClientRect();
    const containerRect = this.menuContainer.getBoundingClientRect();
    const scrollLeft = itemRect.left - containerRect.left - 
                      (containerRect.width - itemRect.width) / 2;
    
    this.menuContainer.scrollTo({
      left: this.menuContainer.scrollLeft + scrollLeft,
      behavior: 'smooth'
    });
  }
};

export default sliderMenu; 