// Element

const lotteryModal = document.querySelector('.expensive');
const closeButton = document.querySelector('.modal button');

// Event
lotteryModal.addEventListener('mouseover', openModal);
closeButton.addEventListener('click', closeModal);

// Execution

function openModal() {
  document.body.classList.add('lottery');
}

function closeModal() {
  document.body.classList.remove('lottery');
}