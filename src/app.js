document.addEventListener("alpine:init", () => {
  Alpine.data("produk", () => ({
    items: [
      { id: 1, name: "Robusta Brazil", img: "1.jpg", price: 20000 },
      { id: 2, name: "Americano", img: "2.jpg", price: 25000 },
      { id: 3, name: "Arabica blend", img: "3.jpg", price: 30000 },
      { id: 4, name: "Luberica", img: "4.jpg", price: 35000 },
      { id: 5, name: "Arabica Typica", img: "5.jpg", price: 40000 },
    ],
  }));
});
