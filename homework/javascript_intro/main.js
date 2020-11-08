// Try to do this by setting styles (.style)

// Remember to try one step at a time, testing each stage as you go!

// when user clicks grayButton
// then set backGroundColour to grayColour

// whiteButton 
// grayButton

// whiteColour
// grayColour 

// TARGET 
const whiteButton = document.getElementById('whiteButton')
const grayButton = document.getElementById('grayButton')

// ACTION 
function setWhiteColour() {
  whiteButton.classList.toggle('white')
  console.log('hello')
}
function setGrayColour() {
  grayButton.classList.toggle('gray')
  console.log('no')
  document.body.classList.toggle('gray')
}

// EVENT
whiteButton.addEventListener('click', setWhiteColour)
grayButton.addEventListener('click', setGrayColour)




