// a third-party service like FormKeep or FormSpree.
// Only submit if your validation from Step 5 passes.
// 
// (requires signing up for a 5-day free trial)
// (next week we'll look at using other services)

const form = document.querySelector('form')
const emailInput = form.querySelector(`input[name='emailName']`)
const emailValidationMessage = document.querySelector('.no-email')

form.addEventListener('submit', function (event) {
  event.preventDefault()
  console.log(nameInput.value)
  
  const isEmail = nameInput.value === 'alice.andrew@sweatybetty.com'
  
  if (isEmail) {
    emailValidationMessage.classList.add('show')
  } else {
    emailValidationMessage.classList.remove('show')
    form.submit()
  }
})

emailInput.addEventListener('change', function () {
  if (emailInput.value !== 'alice.andrew@sweatybetty.com') {
    emailValidationMessage.classList.remove('show')
  } else {
    emailValidationMessage.classList.add('show')
  }
})