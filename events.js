const button = document.getElementById('btn')

button.addEventListener('click', (e) => {
  console.log('click')
  console.log(e.target.textContent)
})

const gridContainer = document.getElementById('gridContainer')
let activeItem = null

gridContainer.addEventListener('click', function (event) {
  if (event.target.classList.contains('grid-item')) {
    if (activeItem) {
      activeItem.classList.remove('active')
    }
    event.target.classList.add('active')
    activeItem = event.target
  }
})

/*********************************** */

const form = document.getElementById('basicForm')
const emailInput = document.getElementById('email')
const passwordInput = document.getElementById('password')
const emailError = document.getElementById('emailError')
const passwordError = document.getElementById('passwordError')

const validateEmail = (email) => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return re.test(String(email).toLowerCase())
}
const validateField = (name, value) => {
  let isValid = true

  if (name === 'email') {
    if (!validateEmail(value)) {
      emailError.textContent = 'Por favor, introduce un email válido.'
      isValid = false
    } else {
      emailError.textContent = ''
    }
  }

  if (name === 'password') {
    if (value.length < 6) {
      passwordError.textContent =
        'La contraseña debe tener al menos 6 caracteres.'
      isValid = false
    } else {
      passwordError.textContent = ''
    }
  }

  return isValid
}
const handleChange = (event) => {
  const { name, value } = event.target
  console.log(name, value)
  validateField(name, value)
}

const handleSubmit = (event) => {
  event.preventDefault()
  const email = emailInput.value
  const password = passwordInput.value
  const emailValid = validateField('email', email)
  const passwordValid = validateField('password', password)

  if (emailValid && passwordValid) {
    console.log('Email:', email)
    console.log('Password:', password)
  } else {
    console.log('Por favor, rellena los campos correctamente.')
  }
}

form.addEventListener('input', handleChange)
form.addEventListener('submit', handleSubmit)
