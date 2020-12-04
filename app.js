// import functions and grab DOM elements
const addInput1 = document.getElementById("add-input-1");
const addInput2 = document.getElementById("add-input-2");
const addButton = document.getElementById("add-button");
const addResults = document.getElementById("add-results");

// initialize state

// set event listeners to update state and DOM
addButton.addEventListener('click', () => {
    const addNumber1 = Number(addInput1.value);
    const addNumber2 = Number(addInput2.value);
    const addResult = addNumber1 + addNumber2;

    addResults.textContent = addResult;
});

const subtractInput1 = document.getElementById("subtract-input-1");
const subtractInput2 = document.getElementById("subtract-input-2");
const subtractButton = document.getElementById("subtract-button");
const subtractResults = document.getElementById("subtract-results");

subtractButton.addEventListener('click', () => {
    const subNumber1 = Number(subtractInput1.value);
    const subNumber2 = Number(subtractInput2.value);
    const subResult = subNumber1 - subNumber2;

    subtractResults.textContent = subResult;
});

const multiplyInput1 = document.getElementById("multiply-input-1");
const multiplyInput2 = document.getElementById("multiply-input-2");
const multiplyButton = document.getElementById("multiply-button");
const multiplyResults = document.getElementById("multiply-results");

multiplyButton.addEventListener('click', () => {
    const multNumber1 = Number(multiplyInput1.value);
    const multNumber2 = Number(multiplyInput2.value);
    const multResult = multNumber1 * multNumber2;

    multiplyResults.textContent = multResult;
});

const divideInput1 = document.getElementById("divide-input-1");
const divideInput2 = document.getElementById("divide-input-2");
const divideButton = document.getElementById("divide-button");
const divideResults = document.getElementById("divide-results");

divideButton.addEventListener('click', () => {
    const divNumber1 = Number(divideInput1.value);
    const divNumber2 = Number(divideInput2.value);
    const divResult = divNumber1 / divNumber2;

    divideResults.textContent = divResult;
});