const textareas = document.querySelectorAll('textarea')

const updateStyle = function (event, Target, Label) {
  if (event.keyCode === 13) {
    event.preventDefault()
    return
  }
  Target.setAttribute('style', event.target.value)

  if (Target.clientTop === Label.clientTop) {
    logPosition(Target)
    logPosition(Label)
  }
}

function logPosition({ clientTop, clientLeft, clientWidth, clientHeight }) {
  console.log({ clientTop, clientLeft, clientWidth, clientHeight })
}

textareas.forEach(function (textarea, i, array) {
  const targetSelector = textarea.getAttribute('data-target')
  const target = document.querySelector(`.grid-view ${targetSelector}`)
  const label = document.querySelector(`.labels ${targetSelector}`)

  const update = (e) => updateStyle(e, target, label)
  textarea.addEventListener('keydown', update)
  textarea.addEventListener('input', update)

  // on page load, update
  update({ target: textarea })
})
