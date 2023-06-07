const numbers = document.querySelectorAll('[data-number]');
const operationBttns= document.querySelectorAll('[data-operation]');
const equalsBttn= document.querySelector('[data-equals]')
const deleteBttn= document.querySelector('[data-delete');
const allClearBttn = document.querySelector('[data-all-clear]');
const previousOperandText = document.querySelector('[data-previous-operand]');
const currentOperandText= document.querySelector('[data-current-operand]');
class Calculator {
    constructor(previousOperandText, currentOperandText) {
      this.previousOperandText = previousOperandText
      this.currentOperandText = currentOperandText
      clear();
    
    };
   
  };
  const calculator = new Calculator(previousOperandText, currentOperandText);
  numbers.forEach(button => {
    button.addEventListener('click', () => {
      Calculator.appendNumber(button.innerHTML)
      Calculator.updateDisplay();
    });
});
  console.log(appendNumber());


  function clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined; };

function add(a,b){
    let sum = a+b;
    console.log( sum);
};

function subtract(a,b){
    let sum= a-b;
    console.log( sum);
};

function multi(a,b){
    let fin = a*b;
    console.log(fin);
};
function div(a,b){
    let fin = a/b;
    console.log( fin);
};
function operate(a,b,x){
    add(a,b);
};


function appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString()
};



function updateDisplay() {
    this.currentOperandText.innerText = this.currentOperand;
};

