"use strict";
"use strict";

let display = document.getElementById('display');

function appendToDisplay(value) {
    // Prevent multiple decimal points
    if (value === '.' && display.value.includes('.')) return;
    
    // Prevent multiple operators in a row
    if (isOperator(value) && isOperator(display.value.slice(-1))) {
        display.value = display.value.slice(0, -1) + value;
        return;
    }
    
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        // Safely evaluate the expression
        const result = eval(display.value);
        
        // Handle division by zero
        if (!isFinite(result)) {
            display.value = 'Error';
            return;
        }
        
        // Format the result to avoid long decimal numbers
        display.value = Number(result.toFixed(8)).toString();
    } catch (error) {
        display.value = 'Error';
    }
}

function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}