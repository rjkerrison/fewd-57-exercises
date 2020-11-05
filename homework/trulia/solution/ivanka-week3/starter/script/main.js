const open_popup = document.querySelector(".open_popup");
const close_popup = document.querySelector(".close_popup");
const overlay = document.querySelector(".overlay");

open_popup.addEventListener("click", () => {
  overlay.style.display = "flex";
  overlay.style.cssText =
    "animation:slide-in .5s ease; animation-fill-mode:forwards;";
});

close_popup.addEventListener("click", () => {
  overlay.style.cssText =
    "animation:slide-out .5s ease; animation-fill-mode:forwards;";
  setTimeout(() => {
    overlay.style.display = "none";
  }, 500);
});
