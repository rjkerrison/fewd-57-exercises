// grab a reference to all the elements that will control the show/hide of the nav
// what is the ELEMENT selector?

// loop through each of the nav icon triggers and add an event listener
// what is the EVENT?
// what is the EXECUTED FUNCTION?

// create the event handler function to toggle the active state of the site nav
// what will the event handler do/change to show/hide the nav?

// when I click the close button
// add the 'is-active' class the menu

//element
const menu = document.querySelector('nav.site-nav')
const closeButton = document.querySelector('.site-nav-icon')
const hamburger = document.querySelector('.hamburger')

// events
closeButton.addEventListener('click', toggleMenu)
hamburger.addEventListener('click', toggleMenu)

// execution
function toggleMenu() {
  menu.classList.toggle('is-active')
}
