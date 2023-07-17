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

let period = document.querySelector('#period')
let periodFlag = false

let clearDisplay = false // flag to clear the display
let currentNumber = ''
let previousNumber = ''
let operation = ''
let result = ''

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
    return 0
  }
}

// add event listener on numbers
numbersArray.forEach(number => number.addEventListener('click', handleNumber))

function handleNumber(e) {
  if (display.textContent === '0') {
    currentNumber = e.target.textContent
    display.textContent = currentNumber
    console.log('1: ', currentNumber)

    if (currentNumber.includes('.')) {
      period.disabled = true
      periodFlag = true
    } else {
      period.disabled = false
      periodFlag = false
    }
  } else {
    if (clearDisplay === true) {
      display.textContent = ''
      currentNumber = e.target.textContent
      display.textContent += currentNumber
      // console.log('2: ', currentNumber)
      clearDisplay = false

      if (currentNumber.includes('.')) {
        period.disabled = true
        periodFlag = true
      } else {
        period.disabled = false
        periodFlag = false
      }
    } else {
      display.textContent += e.target.textContent
      currentNumber = display.textContent
      // console.log('3: ', currentNumber)

      if (currentNumber.includes('.')) {
        period.disabled = true
        periodFlag = true
      } else {
        period.disabled = false
        periodFlag = false
      }
    }
  }
}

// add event listener on operations
operationsArray.forEach(operation => operation.addEventListener('click', handleOperation))

function handleOperation(e) {
  operation = e.target.textContent
  previousNumber = display.textContent
  clearDisplay = true
}

// add event listener on equals operation
equalsButton.addEventListener('click', handleEquals)

function handleEquals() {
  console.log(currentNumber)
  console.log(previousNumber)

  result = operate(operation, Number(previousNumber), Number(currentNumber))

  if (result.length < 8) {
    display.textContent = result
  } else {
    display.textContent = Math.round(result * 100) / 100
  }
}

// clear display
clearButton.addEventListener('click', () => {
  location.reload()
})

// add percentage
percentageButton.addEventListener('click', () => {
  display.textContent = display.textContent / 100
})

// delete last number
deleteButton.addEventListener('click', () => {
  display.textContent = display.textContent.slice(0, -1)
})
