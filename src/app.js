document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "Raw Cacao Powder", img: "1.jpg", price: 80000 },
      { id: 2, name: "Organik Cacao", img: "2.jpg", price: 90000 },
      { id: 3, name: "Arabica Coffe", img: "3.jpg", price: 50000 },
      { id: 4, name: "Bali Coffe", img: "4.jpg", price: 70000 },
      { id: 5, name: "Coffe Beans", img: "5.jpg", price: 60000 },
    ],
  }));

  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      this.items.push(newItem);
      this.quantity++;
      this.total += newItem.price;
      console.log(this.total);
    },
  });
});

// konversi ke rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};
