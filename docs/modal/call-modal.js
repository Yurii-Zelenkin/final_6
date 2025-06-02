export function initCallModal() {
  const callButtons = document.querySelectorAll('.price-repair__desktop-btn, .header__repair-btn, .card__time-button');
  const modalCall = document.querySelector('.modal-call');
  
  if (!modalCall) {
    console.error('Modal call element not found');
    return;
  }

  const closeButton = modalCall.querySelector('.modal-call__close-btn');
  const overlay = modalCall.querySelector('.modal-call__overlay');
  const form = modalCall.querySelector('.modal-call__form');

  if (!closeButton || !overlay || !form) {
    console.error('Some modal call elements not found');
    return;
  }

  function openModal() {
    modalCall.classList.add('modal-call--active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalCall.classList.remove('modal-call--active');
    document.body.style.overflow = '';
    form.reset();
  }

  if (callButtons.length > 0) {
    callButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
      });
    });
  } else {
    console.warn('No call buttons found');
  }

  closeButton.addEventListener('click', (e) => {
    e.preventDefault();
    closeModal();
  });

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      closeModal();
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    closeModal();
  });

  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalCall.classList.contains('modal-call--active')) {
      closeModal();
    }
  });
} 