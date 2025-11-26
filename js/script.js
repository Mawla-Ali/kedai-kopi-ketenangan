// Toggle class active untuk hamberger menu
const navbarnav = document.querySelector(".navbar-nav");

//Ketika humberger menu di klik
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarnav.classList.toggle("active");
  e.preventDefault();
  // 1
};

//Klik diluar sidebar untuk mennutup elmemen
// 2{
const ham = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
document.addEventListener("click", function (e) {
  if (!ham.contains(e.target) && !navbarnav.contains(e.target)) {
    navbarnav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  // }
});

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchbox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  //Agar pada saat di klik, search langsung aktif
  searchbox.focus();
  // Agar aksi ddefault tidak dilakukan. ketika mengaktifkan search
  // di bagian tentang kami atau yang lain, pasti akan langsung kembali ke awal
  // Agar mencegah hal tersebut, berikan perintah berikut
  e.preventDefault();
};
