let previousValue = "";
let currentValue = "";
let calOperator  = "";
// alert("Instruction: To use this calculator you must press the '=' operator to keep adding numbers. For Example instead of pressing 4+4+5. press 4+4 = 'answer' + 5");

const clear = document.querySelector("#clear");
const deleteButton = document.querySelector("#delete");
const equal = document.querySelector("#equal");
const decimal = document.querySelector("#decimal");
const currentScreen = document.querySelector(".currentScreen");
const previousScreen = document.querySelector(".previousScreen");
let numbers = document.querySelectorAll("#number");
let operators = document.querySelectorAll("#operator");

numbers.forEach(number => {
    number.addEventListener("click", (e) => {
        calNumber(e.target.defaultValue);
        currentScreen.innerText = currentValue;
    });
});
function calNumber (num) {
    if (currentValue.length <= 11) {
        currentValue += num;
    }
}

operators.forEach(operator => {
    operator.addEventListener("click", (e) => {
        operate(e.target.defaultValue);
        previousValue  = currentValue;
        currentValue = "";
        currentScreen.innerText = "";
        previousScreen.innerText = `${previousValue} ${calOperator}`;
    });
});
function operate (op) {
    calOperator = op; 
}


equal.addEventListener("click", calculate)
function calculate () {
    previousValue = +previousValue;
    currentValue = +currentValue;
    if (calOperator === "+") {
        previousScreen.innerText = `${previousValue} ${calOperator} ${currentValue}`;
        previousValue  = previousValue + currentValue;
    } else if (calOperator === "-") {
        previousScreen.innerText = `${previousValue} ${calOperator} ${currentValue}`;
        previousValue = previousValue - currentValue;
    } else if (calOperator === "x") {
        previousScreen.innerText = `${previousValue} ${calOperator} ${currentValue}`;
        previousValue = parseInt(previousValue) * parseInt(currentValue);
    } else if (calOperator === "÷") {
        previousScreen.innerText = `${previousValue} ${calOperator} ${currentValue}`;
        previousValue = previousValue / currentValue;
    }
    currentValue = previousValue.toString();
    currentScreen.innerText = currentValue;
}

clear.addEventListener("click", () => {
    previousScreen.innerText = "";
    currentScreen.innerText = "";
    previousValue = "";
    currentValue = "";
    result = "";
});
deleteButton.addEventListener("click", () => {
    currentValue = currentValue.substring(0, currentValue.length-1);
    currentScreen.innerText = currentValue;
});
