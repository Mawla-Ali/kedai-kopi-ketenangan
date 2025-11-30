document.addEventListener("alpine:init", () => {
  Alpine.data("produk", () => ({
    items: [
      {
        id: 1,
        name: "Robusta Brazil",
        img: "1.jpg",
        price: 20000,
        ket: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, iusto atque. Quaerat quas expedita voluptas officia at quasi deserunt nobis quis autem facilis, dolores earum.",
      },
      {
        id: 2,
        name: "Americano",
        img: "2.jpg",
        price: 25000,
        ket: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, iusto atque. Quaerat quas expedita voluptas officia at quasi deserunt nobis quis autem facilis, dolores earum.",
      },
      {
        id: 3,
        name: "Arabica blend",
        img: "3.jpg",
        price: 30000,
        ket: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, iusto atque. Quaerat quas expedita voluptas officia at quasi deserunt nobis quis autem facilis, dolores earum.",
      },
      {
        id: 4,
        name: "Luberica",
        img: "4.jpg",
        price: 35000,
        ket: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, iusto atque. Quaerat quas expedita voluptas officia at quasi deserunt nobis quis autem facilis, dolores earum.",
      },
      {
        id: 5,
        name: "Arabica Typica",
        img: "5.jpg",
        price: 40000,
        ket: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, iusto atque. Quaerat quas expedita voluptas officia at quasi deserunt nobis quis autem facilis, dolores earum.",
      },
    ],
  }));

  Alpine.store("cart", {
    items: [],
    totalharga: 0,
    jumlahbarang: 0,
    add(newItem) {
      // Cek barang yang sama di cart
      const cartitem = this.items.find((item) => item.id === newItem.id);

      // Jika belum ada / cart masih kosong
      if (!cartitem) {
        this.items.push({ ...newItem, jumlahbarang: 1, totalharga: newItem.price });
        this.jumlahbarang++;
        this.totalharga += newItem.price;
        console.log(this.items);
        console.log(this.totalharga);
      } else {
        // Jika barang sudah ada di cart, cek apakah sama atau beda
        this.items = this.items.map((item) => {
          if (item.id !== newItem.id) {
            console.log(this.items);
            console.log(this.totalharga);
            return item;
          } else {
            // Jika barang sudah ada, tambah quantity
            item.jumlahbarang++;
            item.totalharga = item.price * item.jumlahbarang;
            this.jumlahbarang++;
            this.totalharga += item.price;
            console.log(this.items);
            console.log(this.totalharga);
            return item;
          }
        });
      }
    },
    remove(id) {
      const cartitem = this.items.find((item) => item.id === id);
      // Jika item lebih dari 1
      if (cartitem.jumlahbarang > 1) {
        // telusuri 1 1
        this.items = this.items.map((item) => {
          if (item.id !== id) {
            return item;
          } else {
            item.jumlahbarang--;
            item.totalharga = item.price * item.jumlahbarang;
            this.jumlahbarang--;
            this.totalharga -= item.price;

            return item;
          }
        });
      } else if (cartitem.jumlahbarang === 1) {
        // Jika barang sisa 1
        this.items = this.items.filter((item) => item.id !== id);
        this.jumlahbarang--;
        this.totalharga -= cartitem.price;
      }
    },
  });
});

// Konversi mata uang sesuai negara
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    // Berfungsi menghilangkan dua digit belakang pada harga
  }).format(number);
};
