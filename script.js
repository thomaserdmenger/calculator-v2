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

// let periodButton = document.querySelector('#period')

// set variables
// let clearDisplay = false // flag to clear the display
// let currentNumber = ''
// let previousNumber = ''
// let operation = ''
// let result = ''

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
    return 0
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
      number1 = buttonValue
    } else if (buttonValue === '.' && !number1.includes('.')) {
      number1 += buttonValue
    } else if (buttonValue !== '.') {
      number1 += buttonValue
    }
    display.textContent = number1
  } else {
    // Operation selected, update number2
    if (number2 === null) {
      number2 = buttonValue
    } else if (buttonValue === '.' && !number2.includes('.')) {
      number2 += buttonValue
    } else if (buttonValue !== '.') {
      number2 += buttonValue
    }
    display.textContent = number2
  }

  // console.log(buttonValue)
  // console.log(number1)

  // if (!display.textContent.includes('.') && periodFlag === false) {
  //   display.textContent += e.target.textContent

  //   console.log('does not includes')
  //   console.log(display.textContent)
  // } else if (display.textContent.includes('.')) {
  //   periodFlag = true
  //   periodButton.disbled = true
  //   display.textContent += e.target.textContent

  //   console.log('includes')
  //   console.log(display.textContent)
  // }

  // if (display.textContent === '0') {
  //   currentNumber = e.target.textContent
  //   display.textContent = currentNumber
  //   // console.log('1: ', currentNumber)

  //   if (currentNumber.includes('.')) {
  //     period.disabled = true
  //     periodFlag = true
  //   } else {
  //     period.disabled = false
  //     periodFlag = false
  //   }
  // } else {
  //   if (clearDisplay === true) {
  //     display.textContent = ''
  //     currentNumber = e.target.textContent
  //     display.textContent += currentNumber
  //     // console.log('2: ', currentNumber)
  //     clearDisplay = false

  //     if (currentNumber.includes('.')) {
  //       period.disabled = true
  //       periodFlag = true
  //     } else {
  //       period.disabled = false
  //       periodFlag = false
  //     }
  //   } else {
  //     display.textContent += e.target.textContent
  //     currentNumber = display.textContent
  //     // console.log('3: ', currentNumber)

  //     if (currentNumber.includes('.')) {
  //       period.disabled = true
  //       periodFlag = true
  //     } else {
  //       period.disabled = false
  //       periodFlag = false
  //     }
  //   }
  // }
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
