export function initReadMore() {
  const readMoreBtn = document.querySelector('.readmore__container-btn');
  const descriptionText = document.querySelector('.description__text');

  if (readMoreBtn && descriptionText) {
    readMoreBtn.addEventListener('click', function() {
      descriptionText.classList.toggle('expanded');
      this.classList.toggle('expanded');
      this.textContent = descriptionText.classList.contains('expanded') ? 'Скрыть' : 'Читать далее';
    });
  }
} 