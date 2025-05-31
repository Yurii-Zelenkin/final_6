document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('feedback-modal');
  const openBtn = document.getElementById('checkstatus-btn');
  const closeBtn = modal.querySelector('.modal__close-btn');
  const overlay = modal.querySelector('.modal__overlay');

  function openModal() {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  openBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  const form = modal.querySelector('.modal__form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    closeModal();
  });
}); 