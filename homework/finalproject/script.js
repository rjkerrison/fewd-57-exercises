// grab a reference to all the elements that will control the show/hide of the nav
const navIcons = document.querySelectorAll('.js-nav-icon');

// loop through each of the nav icon triggers and add an event listener
navIcons.forEach(function (icon) {
	icon.addEventListener('click', toggleNav);
});

// create the event handler function to toggle the active state of the site nav
function toggleNav(event) {
	const siteNav = document.querySelector('.site-nav-menu');
	siteNav.classList.toggle('is-active');
}