//getting rating value

const btnValue = document.querySelector(".value-wrapper");
const selected = document.querySelector(".selected");
var value;

btnValue.addEventListener("click", function (e) {
  if (e.target && e.target.id == "1") {
    value = 1;
    //console.log(value);
  }
  if (e.target && e.target.id == "2") {
    value = 2;
    //console.log(value);
  }
  if (e.target && e.target.id == "3") {
    value = 3;
    //console.log(value);
  }
  if (e.target && e.target.id == "4") {
    value = 4;
    //console.log(value);
  }
  if (e.target && e.target.id == "5") {
    value = 5;
    //console.log(value);
  }
  // Rating Value
  selected.innerHTML = `You selected ${value} out of 5`;
});

//submit the rating

const rating = document.querySelector(".rating-state");
const thanks = document.querySelector(".thanks-state");
const submit = document.querySelector(".submit");

submit.addEventListener("click", function () {
  rating.style.visibility = "hidden";
  thanks.style.visibility = "visible";
});

//the rating
