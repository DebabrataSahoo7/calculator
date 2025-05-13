
let display = document.getElementById('display');
let memory = 0;

function appendNumber(num) {
    display.value += num;
}

function appendOperator(op) {
    display.value += op;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

function calculateSquareRoot() {
    try {
        display.value = Math.sqrt(eval(display.value));
    } catch (e) {
        display.value = 'Error';
    }
}

function calculatePercentage() {
    try {
        display.value = eval(display.value) / 100;
    } catch (e) {
        display.value = 'Error';
    }
}

function memoryAdd() {
    try {
        memory += eval(display.value);
    } catch (e) {
        memory = 0;
    }
}

function memoryRecall() {
    display.value += memory;
}

function memoryClear() {
    memory = 0;
}

document.addEventListener('keydown', function (event) {
    if (event.key >= 0 && event.key <= 9 || ['+', '-', '*', '/','.'].includes(event.key)) {
        display.value += event.key;
    } else if (event.key === 'Enter') {
        calculateResult();
    } else if (event.key === 'Backspace') {
        display.value = display.value.slice(0, -1);
    }
});
