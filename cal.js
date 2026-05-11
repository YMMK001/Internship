// DOM elements ကို select လုပ်မယ်
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const operatorSelect = document.getElementById('operator');
const calculateBtn = document.getElementById('calculateBtn');
const resultValueDisplay = document.getElementById('resultValue');

// Calculate function
function calculate() {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const operator = operatorSelect.value;
    let result;

    // input checks (not present in screenshot logic but good practice for any calculator)
    if (isNaN(num1) || isNaN(num2)) {
        resultValueDisplay.textContent = 'Invalid Input';
        resultValueDisplay.style.color = 'red';
        return;
    }

    // operator control logic (generic calculator logic)
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            // Handle division by zero
            if (num2 === 0) {
                resultValueDisplay.textContent = 'Error';
                resultValueDisplay.style.color = 'red';
                return;
            }
            result = num1 / num2;
            break;
        default:
            result = 'Error';
    }

    // result format (result logic screenshot for generic calculations)
    resultValueDisplay.textContent = result;
    resultValueDisplay.style.color = 'green';
}

// Button click event listener
calculateBtn.addEventListener('click', calculate);

// (Optional) Initial values တွေနဲ့ default calculation results screenshot shown correct form
// load initial state based on values 45, +, 45
resultValueDisplay.textContent = '90';
num1Input.value = '45';
num2Input.value = '45';
operatorSelect.value = '+';