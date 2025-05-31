
let modal;
let modalCloseBtn;
let modalOverlay;
let openBtn;


function openModal() {
  if (modal) {
    modal.classList.add('modal--active');
    document.body.style.overflow = 'hidden';
  }
}


function closeModal() {
  if (modal) {
    modal.classList.remove('modal--active');
    document.body.style.overflow = '';
  }
}

export function initModal() {
  modal = document.getElementById('feedback-modal');
  modalCloseBtn = modal && modal.querySelector('.modal__close-btn');
  modalOverlay = modal && modal.querySelector('.modal__overlay');
  openBtn = document.getElementById('checkstatus-btn');

  if (openBtn) {
    openBtn.addEventListener('click', openModal);
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', closeModal);
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('modal--active')) {
      closeModal();
    }
  });


  const modalForm = modal && modal.querySelector('.modal__form');
  if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
     
      closeModal();
    });
  }
}


export { openModal, closeModal }; 