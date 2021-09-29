setTimeout(() => {
  alert("We Don't Store any type of Data");
}, 1000);

const birthDateInput = document.querySelector("#birthday");
const luckNumberInput = document.querySelector("#luckyNumber");
const message = document.querySelector("#message");

// find lucky number
luckNumberInput.addEventListener("change", function () {
  //arrow function is not good for visibility here
  luckyBility();
});

birthDateInput.addEventListener("change", function () {
  if (luckNumberInput.value !== "") luckyBility();
});

function clear(elementToClear) {
  elementToClear.style.display = "none";
}
function display(elementToDisplay) {
  elementToDisplay.style.display = "block";
}

function luckyBility() {
  let sumOfDate = findSumOfBirthDate();
  let luckNumber = luckNumberInput.value;
  console.log(message.innerHTML);
  if (sumOfDate % luckNumber === 0) {
    message.innerHTML = "its your lucky Number🥳";
  } else {
    message.innerHTML = "you lose !! better luck next time😔";
  }
}

const findSumOfBirthDate = () => {
  let acc = 0;
  let sumOfDates = birthDateInput.value
    .split("")
    .filter((ele) => ele !== "-")
    .reduce((acc, val) => {
      acc = Number(acc);
      return (acc += Number(val));
    });
  return sumOfDates;
};
