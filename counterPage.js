// Initialize counter array
let counters = [];

// Selectors
const makeCounterBtn = document.getElementById("make-another-counter-btn");
const startWithZeroBtn = document.getElementById("start-with-zero-btn");
const inputYourValue = document.getElementById("input-your-value-btn");
const inputForm = document.getElementById("input-value-form");
const startWithZeroForm = document.getElementById("start-with-zero-form");
const counterContainer = document.getElementById("counter-container");
const inputValueDiv = document.getElementById("input-value-div");
const submitButton = document.getElementById("submit-value");
const formContainerWrapper = document.getElementById("form-container-wrapper");

// On load function

// window.onload = function () {
//   formContainerWrapper.style.display = "none";
// };

// Event Listeners

makeCounterBtn.addEventListener("click", () => {
  formContainerWrapper.style.display = "flex";
  inputForm.style.display = "flex";
  startWithZeroForm.style.display = "flex";
  inputValueDiv.style.display = "none";
  counterContainer.style.display = "none";
  makeCounterBtn.style.display = "none";
});

window.onload = function () {
  inputForm.style.display = "flex";
  startWithZeroForm.style.display = "flex";
  inputValueDiv.style.display = "none";
  makeCounterBtn.style.display = "none";
  counterContainer.style.display = "none";
};

inputYourValue.addEventListener("click", () => {
  inputForm.style.display = "none";
  startWithZeroForm.style.display = "none";
  makeCounterBtn.style.display = "none";
  inputValueDiv.style.display = "flex";
});

startWithZeroBtn.addEventListener("click", () => {
  inputForm.style.display = "none";
  startWithZeroForm.style.display = "none";
  inputValueDiv.style.display = "none";
  const newCounter = createCounter(0);
  counters.push(newCounter);
  formContainerWrapper.style.display = "none";
  makeCounterBtn.style.display = "flex";
  counterContainer.style.display = "flex";
  counterContainer.appendChild(newCounter);
});

submitButton.addEventListener("click", () => {
  const inputValue = document.getElementById("input-value").value;
  if (inputValue.trim() !== "") {
    inputForm.style.display = "none";
    startWithZeroForm.style.display = "none";
    inputValueDiv.style.display = "none";
    const newCounter = createCounter(parseInt(inputValue));
    counters.push(newCounter);
    formContainerWrapper.style.display = "none";
    makeCounterBtn.style.display = "flex";
    counterContainer.style.display = "flex";
    counterContainer.appendChild(newCounter);
  }
});

// Creating counters
function createCounter(initialValue) {
  // Creating individual container divs
  const counterDiv = document.createElement("div");
  const counterValueDiv = document.createElement("div");
  const buttonContainerDiv = document.createElement("div");
  const increaseBtn = document.createElement("button");
  const decreaseBtn = document.createElement("button");
  const resetBtn = document.createElement("button");
  const removeBtn = document.createElement("button");

  // Setting attributes to the created divs
  counterValueDiv.classList.add("counter-value");
  buttonContainerDiv.classList.add("button-container");
  increaseBtn.classList.add("btn");
  increaseBtn.classList.add("plus-button");
  decreaseBtn.classList.add("btn");
  decreaseBtn.classList.add("minus-button");
  resetBtn.classList.add("btn");
  resetBtn.classList.add("reset-button");
  removeBtn.classList.add("btn");
  removeBtn.classList.add("remove-button");

  // Setting text for the created divs
  counterValueDiv.textContent = initialValue;
  increaseBtn.textContent = "+";
  decreaseBtn.textContent = "-";
  resetBtn.textContent = "Reset";
  removeBtn.textContent = "X";

  // Adding event listneres to these created buttons

  increaseBtn.addEventListener("mousedown", () => {
    // Increase counter value every 100ms while the button is held down
    const intervalId = setInterval(() => {
      counterValueDiv.textContent = parseInt(counterValueDiv.textContent) + 1;
    }, 200);

    // Stop increasing the counter value when the mouse is released
    increaseBtn.addEventListener("mouseup", () => clearInterval(intervalId));

    // Increase the counter value once when the button is clicked
    counterValueDiv.textContent = parseInt(counterValueDiv.textContent) + 1;
  });

  decreaseBtn.addEventListener("mousedown", () => {
    // Decrease counter value every 100ms while the button is held down
    const intervalId = setInterval(() => {
      counterValueDiv.textContent = parseInt(counterValueDiv.textContent) - 1;
    }, 200);

    // Stop decreasing the counter value when the mouse is released
    decreaseBtn.addEventListener("mouseup", () => clearInterval(intervalId));

    // Decrease the counter value once when the button is clicked
    counterValueDiv.textContent = parseInt(counterValueDiv.textContent) - 1;
  });

  resetBtn.addEventListener("click", () => {
    counterValueDiv.textContent = initialValue;
  });

  removeBtn.addEventListener("click", () => {
    const index = counters.indexOf(counterDiv);
    counters.splice(index, 1);
    counterDiv.remove();
  });

  // Adding/appending these divs to the page

  counterDiv.appendChild(counterValueDiv);
  counterDiv.appendChild(buttonContainerDiv);
  buttonContainerDiv.appendChild(increaseBtn);
  buttonContainerDiv.appendChild(decreaseBtn);
  buttonContainerDiv.appendChild(resetBtn);
  buttonContainerDiv.appendChild(removeBtn);

  counterDiv.classList.add("counter");

  return counterDiv;
}
