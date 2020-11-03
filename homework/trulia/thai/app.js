const modalBtn = document.querySelector(".modal-btn");
const modalBg = document.querySelector(".modal-bg");
const modalClose = document.querySelector(".modal-close");
const modalOutside = document.querySelector(".modal-outside");

modalBtn.addEventListener("click", function () {
  modalBg.classList.add("bg-active");
});
modalClose.addEventListener("click", function () {
  modalBg.classList.remove("bg-active");
});

modalOutside.addEventListener("click", function (event) {
  modalBg.classList.remove("bg-active");
});

// modalBg.classList.remove("bg-active");

// attempt to apply for loops for document.querySelectorAll so it applies to all modal buttons
// for (i = 0; i < 13; i+=) {
//   modalBtn;
// }
