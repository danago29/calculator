let a
let op
let b
let flag_decimal

initialize();

let button_nums = document.querySelectorAll('.button.number');
let button_ops = document.querySelectorAll('.button.op');
let button_eq = document.querySelector('.button.eq');
let button_decimal = document.querySelector('.button.decimal');
let button_clear = document.querySelector('.button.control.clear');

button_nums.forEach(button_num => button_num.addEventListener('click', numberPressed));
button_ops.forEach(button_op => button_op.addEventListener('click', opPressed));
button_eq.addEventListener('click', eqPressed);
button_decimal.addEventListener('click', decimalPressed);
button_clear.addEventListener('click', initialize);

setDisplay(0);

function initialize() {
    a = 0;
    op = add;
    b = null;
    flag_decimal = false;
    setDisplay(0);
}

function numberPressed() {
    if(b == null) {
        b = Number(this.textContent);
    } else if(flag_decimal == false) {
        b = b*10 + Number(this.textContent);
    } else if(flag_decimal == true && Number.isInteger(b)) {
        b = Number(`${b}.${this.textContent}`);
    } else if(flag_decimal && !Number.isInteger(b)) {
        b = Number(`${b}${this.textContent}`);
    }

    setDisplay(b)

}

function opPressed() {
    flag_decimal = false;
    if(b == null) {
        op = window[this.getAttribute('data-op')];
    } else {
        a = operate(op, a, b);
        op = window[this.getAttribute('data-op')];
        b = null;
        setDisplay(a);
    }

}

function eqPressed() {
    flag_decimal = false;
    if(b == null) {
        op = add;
        setDisplay(a);
    } else {
        a = operate(op, a, b);
        op = null;
        b = null;
        setDisplay(a);
    }
}

function decimalPressed() {
    flag_decimal = true;

    if(b == null) {
        b = 0;
    } 
}




function add(a,b) {
    return a + b;
}

function subtract(a,b) { 
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a/b;
}

function operate(op, a, b) {
    return op(a,b);
}

function setDisplay(s) {
    let display = document.querySelector('.display');
    display.textContent = s;
}







