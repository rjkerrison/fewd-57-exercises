const menuButton = document.querySelector('.menu-btn');
let menuOpen = false;
menuButton.addEventListener('click', () => {
  if(!menuOpen) {
    menuButton.classList.add('open');
    menuOpen = true;
  } else {
    menuButton.classList.remove('open');
    menuOpen = false;
  }
});





// grab a reference to all the elements that will control the show/hide of the nav
const navIcons = document.querySelectorAll('menu-btn .js-nav-icon');

// loop through each of the nav icon triggers and add an event listener
navIcons.forEach(function (icon) {
	icon.addEventListener('click', toggleNav);
});

// create the event handler function to toggle the active state of the site nav
function toggleNav(event) {
	const siteNav = document.querySelector('user-nav-open');
	siteNav.classList.toggle('is-active');
}




window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments)};
formbutton("create", {action: "https://formspree.io/f/mgepllab"})


formbutton("create", {
  styles: {
    fontFamily:'"Lato", sans-serif',
    button: {
      background: "#C4001A"
    },
    title: {
      background: "#C4001A",
      letterSpacing: "0.05em",
      textTransform: "uppercase"
    }
  },
  // ...
});