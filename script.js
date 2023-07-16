// get all calculator elements
const numbersNodeList = document.querySelectorAll('[ data-number]')
const numbersArray = Array.from(numbersNodeList)

const operationsNodeList = document.querySelectorAll('[data-operation]')
const operationsArray = Array.from(operationsNodeList)

const clearButton = document.querySelector('[data-clear]')
const deleteButton = document.querySelector('[data-delete]')
const percentageButton = document.querySelector('[data-percentage]')
const equalsButton = document.querySelector('[data-equals]')

const content = document.querySelector('[data-content]')
