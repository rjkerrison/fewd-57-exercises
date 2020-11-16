// grab a reference to all the elements that will control the show/hide of the nav
// what is the ELEMENT selector?

// loop through each of the nav icon triggers and add an event listener
// what is the EVENT?
// what is the EXECUTED FUNCTION?

// create the event handler function to toggle the active state of the site nav
// what will the event handler do/change to show/hide the nav?

// when I click the close button
// add the 'is-active' class the menu

// ELEMENT
const closeButton = document.querySelectorAll('.js-nav-icon')[1]
const navMenu = document.querySelector('.site-nav')

// EVENT
closeButton.addEventListener('click', hideMenu)

// EXECUTED FUNCTION
function hideMenu() {
  console.log('clicked it!')
  navMenu.classList.remove('is-active')
}
