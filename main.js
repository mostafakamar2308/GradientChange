//Defining the elements we need

const pickerOne = document.querySelector("#start");
const pickerTwo = document.querySelector("#end");
const body = document.querySelector("body");

//getting the value from local storage

pickerOne.value = window.localStorage.getItem("colorOne");
pickerTwo.value = window.localStorage.getItem("colorTwo");
body.style.backgroundImage = `linear-gradient(to right, ${pickerOne.value}, ${pickerTwo.value})`;

//picker one changes
pickerOne.addEventListener("input", function () {
  let choice = pickerOne.value;
  body.style.backgroundImage = `linear-gradient(to right, ${choice}, ${pickerTwo.value})`;
});

pickerOne.addEventListener("change", function () {
  let choice = pickerOne.value;
  window.localStorage.setItem("colorOne", choice);
  body.style.backgroundImage = `linear-gradient(to right, ${window.localStorage.getItem(
    "colorOne"
  )}, ${pickerTwo.value})`;
});

//picker two changes

pickerTwo.addEventListener("input", function () {
  let choice = pickerTwo.value;
  body.style.backgroundImage = `linear-gradient(to right, ${pickerOne.value}, ${choice})`;
});

pickerTwo.addEventListener("change", function () {
  let choice = pickerTwo.value;
  window.localStorage.setItem("colorTwo", choice);
  body.style.backgroundImage = `linear-gradient(to right, ${pickerOne.value}, ${choice})`;
});
