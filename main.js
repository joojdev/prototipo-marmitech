const animalButton = document.querySelector('#animal')
const vegetalButton = document.querySelector('#vegetal')
const returnButton = document.querySelector('#return')
const cancelButton = document.querySelector('.cancel')
const sendButton = document.querySelector('#send')

const toggleButtons = [animalButton, vegetalButton, returnButton]

function toggleVisibility(element) {
  document.querySelector(element).classList.toggle('hidden')
}

toggleButtons.forEach((button) => {
  button.addEventListener('click', () => {
    toggleVisibility('#firstModal')
    toggleVisibility('#secondModal')
  })
})

const closeButtons = [cancelButton, sendButton]

closeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    toggleVisibility('.blackScreen')
  })
})