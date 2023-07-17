// get all calculator elements
const numbersNodeList = document.querySelectorAll('[ data-number]')
const numbersArray = Array.from(numbersNodeList)

const operationsNodeList = document.querySelectorAll('[data-operation]')
const operationsArray = Array.from(operationsNodeList)

const clearButton = document.querySelector('[data-clear]')
const deleteButton = document.querySelector('[data-delete]')
const percentageButton = document.querySelector('[data-percentage]')
const equalsButton = document.querySelector('[data-equals]')

const display = document.querySelector('[data-content]')

// add event listener on numbers
numbersArray.forEach(number => number.addEventListener('click', handleNumber))

function handleNumber(e) {
  // put first number to operate function
  let firstNumber = display.textContent
  let secondNumber = e.target.textContent

  console.log(firstNumber)
  console.log(secondNumber)

  if (display.textContent === '0') {
    display.textContent = secondNumber
  } else {
    display.textContent += secondNumber
  }
}
