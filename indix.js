// List
let btnopen = document.getElementById("open");
let btnClose = document.getElementById("close");
let navbar = document.querySelector(".navbar-responsive");

btnClose.onclick = function () {
  navbar.classList.add("hid");
  this.classList.add("hid");
  btnopen.classList.remove("hid");
};
btnopen.onclick = function () {
  this.classList.add("hid");
  btnClose.classList.remove("hid");
  navbar.classList.remove("hid");
};
// pages up
let pages = document.getElementById("pages");
let n = document.querySelector(".n");
pages.onclick = function () {
  n.classList.toggle("hid");
};

// dropdown up
let dropdown = document.querySelector(".dropdown");
let navparUp = document.querySelector(".navparUp");

dropdown.onclick = function () {
  navparUp.classList.toggle("hid");
};

let header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

// Up scroll
let btn = document.getElementById("btn");
window.onscroll = function () {
  if (scrollY >= 400) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

btn.onclick = function () {
  scroll({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};

// Default Paramete
function show(
  user = "Default User",
  pas = "Default Pas",
  role = "Default Role"
) {
  return `Hello ${user}, bles paswerd: ${pas}, Your Role Is: ${role} `;
}

console.log(show());
console.log(show("eslam", 1245, "Admin"));
