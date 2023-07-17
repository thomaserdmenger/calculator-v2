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
let operation = ''

// basic functions
function add(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  if (a === 0) {
    return 'ERROR'
  } else {
    return a / b
  }
}

// operation function
function operate(operator, num1, num2) {
  if (operator === '+') {
    // console.log(operator)
    return add(num1, num2)
  } else if (operator === '−') {
    return subtract(num1, num2)
  } else if (operator === '×') {
    return multiply(num1, num2)
  } else if (operator === '÷') {
    return divide(num1, num2)
  } else {
    // handle invalid operator
    return 'Does not work'
  }
}

// add event listener on numbers
numbersArray.forEach(number => number.addEventListener('click', handleNumber))

function handleNumber(e) {
  if (display.textContent === '0') {
    display.textContent = e.target.textContent
  } else {
    if (clearDisplay === true) {
      display.textContent = ''
      display.textContent += e.target.textContent
      currentNumber = e.target.textContent
      clearDisplay = false
    } else {
      display.textContent += e.target.textContent
      currentNumber = display.textContent
    }
  }
}

// add event listener on operations
operationsArray.forEach(operation => operation.addEventListener('click', handleOperation))

function handleOperation(e) {
  clearDisplay = true
  operation = e.target.textContent
  previousNumber = display.textContent
  console.log(previousNumber)
}

// add event listener on equals operation
equalsButton.addEventListener('click', handleEquals)

function handleEquals() {
  console.log(currentNumber)
  console.log(previousNumber)

  let result = operate(operation, Number(previousNumber), Number(currentNumber))
  display.textContent = result
  // console.log(result)
}
