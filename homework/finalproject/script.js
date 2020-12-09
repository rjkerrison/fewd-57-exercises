//get the icon
const navIcons = document.querySelectorAll('.js-nav-icon');

//click the icon to trigger open and close
navIcons.forEach(function (icon) {
	icon.addEventListener('click', toggleNav);
});

//open and close the navigation
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

//pop up field entry
 document.querySelector("form")
        .addEventListener("submit", function(event) {
   event.preventDefault()
  document.getElementById("hello").hidden = true;
  document.getElementById("awesome").hidden = false;
}, false);
 


//dismiss pop up
const navIcon = document.getElementById('nav-icon');

navIcon.addEventListener('click', hideOverlay);

function hideOverlay() {
  overlay.classList.toggle('hide'); }

     


