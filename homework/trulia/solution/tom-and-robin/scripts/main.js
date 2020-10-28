// Element

const lotteryModal = document.querySelector('.expensive')
const closeButton = document.querySelector('.modal button')

// Event
/* RJK
  this was amusing, but for me it caused a bug because the
  .expensive property was right behind the button,
  so as soon as I click the button to close the modal,
  the modal opens up again.

  I've changed it to click
*/

lotteryModal.addEventListener('click', openModal)
closeButton.addEventListener('click', closeModal)

// Execution

function openModal(event) {
  /* RJK
  event.preventDefault()

  This is one of JavaScript's most common tricks for event manipulation.
  It's often better not to prevent the default behaviour for an event,
  as it makes your site less predictable and more likely to lead to poor
  UX, accessibility or scripting.

  Sometimes, it's a big help. What we're saying here, for our link click on
  the .expensive property, is that we do not want to perform the default behaviour,
  which would be navigating to the link's href.
  */
  event.preventDefault()
  document.body.classList.add('lottery')
}

function closeModal() {
  /* RJK
  It's a little odd to add a class at the body level.
  
  If you wanted to add an "active" class directly to the .overlay,
  you could use the CSS selector ".overlay.active" without spaces
  to do your override.
  */
  document.body.classList.remove('lottery')
}
