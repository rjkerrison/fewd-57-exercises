window.addEventListener("keydown", playSound);

function playSound(event) {
  const keyCode = event.keyCode;

  const key = document.querySelector(`div [data-key="${keyCode}"]`);
  const sounds = Array.from(document.querySelectorAll("audio"));

  const [sound] = sounds.filter((element) =>
    element.matches(`[data-key="${keyCode}"]`)
  );

  if (key && sound) {
    sound.currentTime = 0;
    sound.play();
    key.classList.add("playing");
    key.addEventListener("transitionend", removeTransition);
  }
}

function removeTransition(event) {
  event.target.classList.remove("playing");
}

  if (event.keyCode === 65) {
    sound = document.querySelector(".clap-sound");
    key = document.querySelector(".clap-key");
  } else if (event.keyCode === 83) {
    sound = document.querySelector(".hihat-sound");
    key = document.querySelector(".hihat-key");
  } else if (event.keyCode === 68) {
    sound = document.querySelector(".kick-sound");
    key = document.querySelector(".kick-key");
  } else if (event.keyCode === 70) {
    sound = document.querySelector(".openhat-sound");
    key = document.querySelector(".openhat-key");
  } else if (event.keyCode === 71) {
    sound = document.querySelector(".boom-sound");
    key = document.querySelector(".boom-key");
  } else if (event.keyCode === 72) {
    sound = document.querySelector(".ride-sound");
    key = document.querySelector(".ride-key");
  } else if (event.keyCode === 74) {
    sound = document.querySelector(".snare-sound");
    key = document.querySelector(".snare-key");
  } else if (event.keyCode === 75) {
    sound = document.querySelector(".tom-sound");
    key = document.querySelector(".tom-key");
  } else if (event.keyCode === 76) {
    sound = document.querySelector(".tink-sound");
    key = document.querySelector(".tink-key");
  }

