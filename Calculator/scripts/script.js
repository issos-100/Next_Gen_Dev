const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const clearButton = document.getElementById('clear');

let currentInput = '';
let operator = '';
let previousInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.dataset.value;

        if (button.classList.contains('operator')) {
            if (currentInput) {
                previousInput = currentInput;
                currentInput = '';
                operator = value;
            }
        } else if (button.classList.contains('equals')) {
            if (currentInput && previousInput && operator) {
                currentInput = calculate(previousInput, currentInput, operator);
                operator = '';
                previousInput = '';
            }
        } else if (button.classList.contains('clear')) {
            currentInput = '';
            previousInput = '';
            operator = '';
        } else {
            currentInput += value;
        }

        display.textContent = currentInput || '0';
    });
});

function calculate(a, b, op) {
    a = parseFloat(a);
    b = parseFloat(b);
    switch (op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
        default: return 0;
    }
}
