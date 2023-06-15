class Calculator{
    constructor(previousOperandText, currentOperandText){
        this.previousOperandText = previousOperandText
        this.currentOperandText = currentOperandText
        this.clear()
    }

  clear(){
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined}

  appendNumber(number) {
    if(number ==='.' && this.currentOperand.includes('.'))return;
    this.currentOperand = this.currentOperand.toString() + number.toString()
}
chooseOperation(operation){
    if(this.currentOperand ==='')return
    if(this.previousOperand!==''){
        this.compute()
    }
    this.operation= operation 
    this.previousOperand = this.currentOperand
    this.currentOperand = ''
}
delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1)
  }
  getDisplayNumber(number) {
    const stringNumber = number.toString()
    const integerDigits = parseFloat(stringNumber.split('.')[0])
    const decimalDigits = stringNumber.split('.')[1]
    let integerDisplay
    if (isNaN(integerDigits)) {
      integerDisplay = ''
    } else {
      integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`
    } else {
      return integerDisplay
    }
  }


compute(){
    let computation
    const prev =parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    if(isNaN(prev)|| isNaN(current))return
    switch (this.operation){
        case "+":
            computation = prev + current
            break
        case"-":
        computation= prev-current
        break
        case "/":
            computation = prev / current
            break
        case "*":
            computation = prev * current
            break
            default: return
    }
    this.currentOperand = computation
    this.operation = undefined
    this.previousOperand = ''


}

updateDisplay() {
    this.currentOperandText.innerText =
      this.getDisplayNumber(this.currentOperand)
    if (this.operation != null) {
      this.previousOperandText.innerText =
        `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
    } else {
      this.previousOperandText.innerText = ''
    }
  }
};
const numbers = document.querySelectorAll('[data-number]');
const operBttns= document.querySelectorAll('[data-operation]');
const allClearBttn= document.querySelector('[data-clear]');
const deleteBttn= document.querySelector('.delete');
const equalBttn= document.querySelector('[data-equals]');
const previousOperandText= document.querySelector('[data-previousO]');
const currentOperandText= document.querySelector('[data-currentO]');
const calculator = new Calculator(previousOperandText, currentOperandText)
numbers.forEach(button =>{
    button.addEventListener('click',()=>{
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})
operBttns.forEach(button =>{
    button.addEventListener('click',()=>{
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})
equalBttn.addEventListener('click', button => {
      calculator.compute()
      calculator.updateDisplay()
    })

  allClearBttn.addEventListener('click', button => {
      calculator.clear()
      calculator.updateDisplay()
    })

  deleteBttn.addEventListener('click', button => {
      calculator.delete()
      calculator.updateDisplay()
    })


