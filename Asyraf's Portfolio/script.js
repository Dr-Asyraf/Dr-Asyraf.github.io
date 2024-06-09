const btnList = document.querySelector("#listIcon");
const navbar = document.querySelector(".navbar");
const btnClose = document.querySelector("#closeIcon");

btnList.addEventListener("click", function () {
  console.log("Button clicked");
  navbar.style.display = "block";
});

btnClose.addEventListener("click", function () {
  console.log("Button clicked");
  navbar.style.display = "none";
});
