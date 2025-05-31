export function initShowAllButtons() {
  const sections = [
    {
      sliderClass: '.brands-repair__slider',
      wrapperClass: '.brands-repair__wrapper',
      buttonClass: '.brands-repair__btn'
    },
    {
      sliderClass: '.technic-repair__slider',
      wrapperClass: '.technic-repair__wrapper',
      buttonClass: '.technic-repair__btn'
    },
    {
      sliderClass: '.price-repair__slider',
      wrapperClass: '.price-repair__wrapper',
      buttonClass: '.price-repair__btn'
    }
  ];

  sections.forEach(section => {
    const slider = document.querySelector(section.sliderClass);
    const wrapper = document.querySelector(section.wrapperClass);
    const button = document.querySelector(section.buttonClass);

    if (!slider || !wrapper || !button) return;

 
    function updateButtonVisibility() {
      if (window.innerWidth < 768) {
        button.style.display = 'none';
      } else {
        button.style.display = 'block';
      }
    }


    function handleButtonClick() {
      const isExpanded = slider.classList.contains('expanded');
      
      if (isExpanded) {
        slider.classList.remove('expanded');
        wrapper.classList.remove('expanded');
        button.textContent = 'Показать все';
      } else {
        slider.classList.add('expanded');
        wrapper.classList.add('expanded');
        button.textContent = 'Скрыть';
      }
    }


    updateButtonVisibility();
    button.textContent = 'Показать все';
    button.addEventListener('click', handleButtonClick);

 
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        updateButtonVisibility();
      }, 100);
    });
  });
} 