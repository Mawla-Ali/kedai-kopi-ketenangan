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
const spb = document.querySelector("#shopping-cart-btn");
document.addEventListener("click", function (e) {
  if (!ham.contains(e.target) && !navbarnav.contains(e.target)) {
    navbarnav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!spb.contains(e.target) && !shopbutt.contains(e.target)) {
    shopbutt.classList.remove("active");
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
//Toggle class aktif untuk shooping cart
const shopbutt = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-btn").onclick = (e) => {
  shopbutt.classList.toggle("active");
  e.preventDefault();
};

//Membuat Modal box
const itemdet = document.querySelector("#item-detail-modal");
const itemdetbutton = document.querySelector(".Americano");

itemdetbutton.onclick = (e) => {
  itemdet.style.display = "flex";
  e.preventDefault();
};

//Klik tombol close modal
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemdet.style.display = "none";
  e.preventDefault();
};

//Klik di luar modal
const modal = document.querySelector("#item-detail-modal");
window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};
