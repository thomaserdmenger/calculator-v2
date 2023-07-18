// Get all calculator elements
const numbersNodeList = document.querySelectorAll('[ data-number]')
const numbersArray = Array.from(numbersNodeList)

const operationsNodeList = document.querySelectorAll('[data-operation]')
const operationsArray = Array.from(operationsNodeList)

const clearButton = document.querySelector('[data-clear]')
const deleteButton = document.querySelector('[data-delete]')
const percentageButton = document.querySelector('[data-percentage]')
const equalsButton = document.querySelector('[data-equals]')

const display = document.querySelector('[data-content]')

// Set new variables
let number1 = null
let number2 = null
let operation = null

// Basic math functions
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

// Operation function
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
    return result
  }
}

// Add event listener to numbers
numbersArray.forEach(number => number.addEventListener('click', handleNumber))

function handleNumber(e) {
  const button = e.target
  const buttonValue = button.textContent

  if (operation === null) {
    // No operation selected yet, update number1
    if (number1 === null) {
      if (buttonValue === '.') {
        number1 = '0.'
      } else {
        number1 = buttonValue
      }
    } else if (buttonValue === '.' && !number1.includes('.')) {
      number1 += buttonValue
    } else if (buttonValue !== '.') {
      number1 += buttonValue
    }
    display.textContent = number1
  } else {
    // Operation selected, update number2
    if (number2 === null) {
      if (buttonValue === '.') {
        number2 = '0.'
      } else {
        number2 = buttonValue
      }
    } else if (buttonValue === '.' && !number2.includes('.')) {
      number2 += buttonValue
    } else if (buttonValue !== '.') {
      number2 += buttonValue
    }
    display.textContent = number2
  }
}

// Add event listener to operations
operationsArray.forEach(operation => operation.addEventListener('click', handleOperation))

function handleOperation(e) {
  operation = e.target.textContent
  display.textContent = number1
}

// Add event listener to equals operation
equalsButton.addEventListener('click', handleEquals)

function handleEquals() {
  number1 = Number(number1)
  number2 = Number(number2)
  console.log('number1: ' + number1)
  console.log('number2: ' + number2)
  let result = operate(operation, number1, number2)

  display.textContent = result
  number1 = result
  number2 = null
  operation = null
}

// Clear display
clearButton.addEventListener('click', () => {
  location.reload()
})

// TODO: Add percentage (does not work with operations)
percentageButton.addEventListener('click', () => {
  display.textContent = display.textContent / 100
})

// TODO: Delete last number
deleteButton.addEventListener('click', () => {
  console.log(number1.slice(0, -1))
  console.log(number2)
  display.textContent = display.textContent.slice(0, -1)
})
