//three bars and close button
const btn = document.getElementById("btn");
const close = document.getElementById("close");

//sidebar
const sidebar = document.querySelector(".sidebar");
const dropdownF = document.getElementById("feature");
const dropdownC = document.getElementById("company");
const feature = document.querySelector(".nav-links-dropdown-feature");
const company = document.querySelector(".nav-links-dropdown-company");

//main section
const main = document.querySelector(".main-sec");

//arrowUp and arrowDown
const arrowDownF = document.querySelector(".arrow-downF");
const arrowUpF = document.querySelector(".arrow-upF");
const arrowDownC = document.querySelector(".arrow-downC");
const arrowUpC = document.querySelector(".arrow-upC");

btn.addEventListener("click", () => {
  main.classList.add("low-brightness");
  document.body.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
  const visibility = sidebar.getAttribute("data-visible");
  if (visibility === "false") {
    sidebar.setAttribute("data-visible", true);
  }
});

close.addEventListener("click", () => {
  main.classList.remove("low-brightness");
  document.body.style.backgroundColor = "hsl(0, 0%, 98%)";
  sidebar.setAttribute("data-visible", false);
});

dropdownF.addEventListener("click", () => {
  const visibility = feature.getAttribute("data-visible");
  if (visibility === "false") {
    arrowUpF.classList.remove("active");
    arrowDownF.classList.add("active");
    feature.setAttribute("data-visible", true);
  } else {
    arrowUpF.classList.add("active");
    arrowDownF.classList.remove("active");
    feature.setAttribute("data-visible", false);
  }
});

dropdownC.addEventListener("click", () => {
  const visibility = company.getAttribute("data-visible");
  if (visibility === "false") {
    arrowUpC.classList.remove("active");
    arrowDownC.classList.add("active");
    company.setAttribute("data-visible", true);
  } else {
    arrowUpC.classList.add("active");
    arrowDownC.classList.remove("active");
    company.setAttribute("data-visible", false);
  }
});
