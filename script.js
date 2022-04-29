const btn = document.getElementById("btn");
const close = document.getElementById("close");
const sidebar = document.querySelector(".sidebar");
const dropdownF = document.getElementById("feature");
const dropdownC = document.getElementById("company");
const feature = document.querySelector(".nav-links-dropdown-feature");
const company = document.querySelector(".nav-links-dropdown-company");
const main = document.querySelector(".main-sec");

btn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  main.classList.add("low-brightness");
  document.body.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
});

close.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  main.classList.remove("low-brightness");
  document.body.style.backgroundColor = "hsl(0, 0%, 98%)";
});

dropdownF.addEventListener("click", () => {
  feature.classList.toggle("active");
});

dropdownC.addEventListener("click", () => {
  company.classList.toggle("active");
});
