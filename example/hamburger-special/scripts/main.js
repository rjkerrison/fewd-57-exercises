// Elements
const burguerButton = document.getElementById("js-burguer-button");
const body = document.body;
const timeElement = document.querySelector("footer time");

//Events

burguerButton.addEventListener("click", toggleMenu);
window.addEventListener("DOMContentLoaded", setYear);

//Execution

function toggleMenu(_event) {
  body.classList.toggle("menu-open");
  ariaExpandedHandler();
}

function setYear(_event) {
  const year = new Date().getFullYear();
  timeElement.setAttribute("datetime", year);
  timeElement.innerText = year;
}

// Aria controllers

// Event
const windowEvents = ["DOMContentLoaded", "resize"];

windowEvents.forEach(function (event) {
  window.addEventListener(event, ariaHiddenHandler);
});

// Execution

function ariaHiddenHandler(_event) {
  if (window.innerWidth > 600) {
    burguerButton.setAttribute("aria-hidden", true);
  } else {
    burguerButton.setAttribute("aria-hidden", false);
  }
}

function ariaExpandedHandler(_event) {
  const isMenuOpen = body.classList.contains("menu-open");

  if (isMenuOpen) {
    burguerButton.setAttribute("aria-expanded", true);
  } else {
    burguerButton.setAttribute("aria-expanded", false);
  }
}
