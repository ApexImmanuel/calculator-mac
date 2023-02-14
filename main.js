function add(num) {
    return num.reduce((a,b) => a + b, 0);
}
console.log(add([1,3,4,4,45]));
function substract(num) {
    return num.reduce((a,b) => a - b, 0);
}

function multiply(num) {
    return num.reduce((a,b) => a * b);
}

function divide(num) {
    return num.reduce((a,b) => a / b);
}

function operate(oparator) {

}
