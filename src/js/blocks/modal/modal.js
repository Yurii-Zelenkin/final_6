const modal = document.getElementById('feedback-modal');
const modalCloseBtn = modal.querySelector('.modal__close-btn');
const modalOverlay = modal.querySelector('.modal__overlay');


function openModal() {
  modal.classList.add('modal--active');
  document.body.style.overflow = 'hidden';
}


function closeModal() {
  modal.classList.remove('modal--active');
  document.body.style.overflow = '';
}


modalCloseBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);


document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('modal--active')) {
    closeModal();
  }
});


const modalForm = modal.querySelector('.modal__form');
modalForm.addEventListener('submit', (e) => {
  e.preventDefault();

  closeModal();
});


export { openModal, closeModal }; 