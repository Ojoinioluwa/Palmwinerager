const navBar = document.querySelector(".navBar");
const nav = document.querySelector("nav");
const ul = document.querySelector("ul");
const arr = [navBar, ul];

arr.forEach((arr) => {
  arr.addEventListener("click", () => {
    nav.classList.toggle("link");
  });
});
