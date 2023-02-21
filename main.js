let previouseValue = "";
let currentValue = "";

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

    })
})

function calNumber (num) {
    currentValue += num;
    console.log(num);
}

