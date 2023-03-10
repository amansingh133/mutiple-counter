let counter1Buttons = document.querySelector("#buttons1");
let counter2Buttons = document.querySelector("#buttons2");

let counter = function (val) {
  let count = 0;

  function increment() {
    count++;
  }
  function decrement() {
    count--;
  }

  function reset() {
    count = 0;
  }

  function modify(val) {
    if (val === "increase") increment();
    else if (val === "decrease") decrement();
    else if (val === "reset") reset();

    return count;
  }
  return modify;
};

let counter1 = counter();
let counter2 = counter();

let display = function (evt, div) {
  val = evt.target.getAttribute("value");
  let valOfCounter = counter1(val);
  document.getElementById(`${div}`).innerHTML = "<h1>" + valOfCounter + "</h1>";
};

counter1Buttons.addEventListener("click", function (evt) {
  if (evt.target.getAttribute("class") === "counter1-button") {
    display(evt, "output1");
  }
});

counter2Buttons.addEventListener("click", function (evt) {
  if (evt.target.getAttribute("class") === "counter2-button") {
    display(evt, "output2");
  }
});
