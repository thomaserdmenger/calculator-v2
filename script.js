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

let clearDisplay = false // flag to clear the display
let currentNumber = ''
let previousNumber = ''
// console.log(clearDisplay)
console.log(previousNumber)

// add event listener on numbers
numbersArray.forEach(number => number.addEventListener('click', handleNumber))

function handleNumber(e) {
  // put first number to operate function
  let firstNumber = display.textContent // TODO: Use this as the previous number read from screen
  // let secondNumber = e.target.textContent

  // console.log(clearDisplay)

  if (display.textContent === '0') {
    display.textContent = e.target.textContent
  } else {
    if (clearDisplay === true) {
      // console.log('TRUE')
      display.textContent = ''
      display.textContent += e.target.textContent
      currentNumber = display.textContent

      clearDisplay = false
      // currentNumber = display.textContent
      // console.log(currentNumber)
      // console.log(clearDisplay)
    } else {
      // console.log('FALSE')
      display.textContent += e.target.textContent
      currentNumber = display.textContent
    }
  }
}

// add event listener on operations
operationsArray.forEach(operation => operation.addEventListener('click', handleOperation))

function handleOperation(e) {
  clearDisplay = true
  // console.log(clearDisplay)

  const operation = e.target.textContent
  previousNumber = display.textContent
  // console.log(operation)
  // console.log(previousNumber)
}

// add event listener on equals operation
equalsButton.addEventListener('click', handleEquals)

function handleEquals() {
  console.log(currentNumber)
  console.log(previousNumber)

  const result = Number(previousNumber) + Number(currentNumber)
  display.textContent = result
  console.log(result)
}
