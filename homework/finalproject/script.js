// grab a reference to all the elements that will control the show/hide of the nav
const navIcons = document.querySelectorAll('.js-nav-icon');

// loop through each of the nav icon triggers and add an event listener
navIcons.forEach(function (icon) {
	icon.addEventListener('click', toggleNav);
});

// create the event handler function to toggle the active state of the site nav
function toggleNav(event) {
	const siteNav = document.querySelector('.site-nav-burger');
	siteNav.classList.toggle('is-active');
}


//pop up
const overlayElement = document.getElementById('overlay')


const showOverlay = () => {
  overlayElement.classList.remove('hide')
}

setTimeout(showOverlay, 4000)

  
 document.querySelector("form")
        .addEventListener("submit", function(event) {
   event.preventDefault()
  document.getElementById("hello").hidden = true;
  document.getElementById("awesome").hidden = false;
}, false);
 



const navIcon = document.getElementById('nav-icon');

navIcon.addEventListener('click', hideOverlay);

function hideOverlay() {
  overlay.classList.toggle('hide'); }

     


