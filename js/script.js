// Toggle class active untuk hamberger menu
const navbarnav = document.querySelector(".navbar-nav");

//Ketika humberger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarnav.classList.toggle("active");
  // 1
};

//Klik diluar sidebar untuk menghilangkan nav
// 2{
const ham = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!ham.contains(e.target) && !navbarnav.contains(e.target)) {
    navbarnav.classList.remove("active");
  }
  // }
});

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchbox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = () => {
  searchForm.classList.toggle("active");
};
