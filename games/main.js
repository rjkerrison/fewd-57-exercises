const textarea = document.querySelector('textarea')
const header = document.querySelector('.grid-view .header')
const headerLabel = document.querySelector('.labels .header')

const updateStyle = function (event) {
  if (event.keyCode === 13) {
    event.preventDefault()
    return
  }
  header.setAttribute('style', event.target.value)

  if (header.clientTop === headerLabel.clientTop) {
    logPosition(header)
    logPosition(headerLabel)
  }
}

function logPosition({ clientTop, clientLeft, clientWidth, clientHeight }) {
  console.log({ clientTop, clientLeft, clientWidth, clientHeight })
}

textarea.addEventListener('keydown', updateStyle)
textarea.addEventListener('input', updateStyle)
