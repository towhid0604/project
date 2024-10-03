document.addEventListener("DOMContentLoaded", () => {
  const products = [
    {
      id: 1,
      name: "Flowers daisy pink stick",
      price: 599,
      image: "assets/images/product/1.jpg",
    },
    {
      id: 2,
      name: "Blossom bouquet flower",
      price: 599,
      image: "assets/images/product/5.jpg",
    },
    {
      id: 3,
      name: "Rose bouquet white",
      price: 599,
      image: "assets/images/product/7.jpg",
    },
    {
      id: 4,
      name: "Jasmine flowers white",
      price: 599,
      image: "assets/images/product/4.jpg",
    },
    {
      id: 5,
      name: "Orchid flower red stick",
      price: 599,
      image: "assets/images/product/1.jpg",
    },
    {
      id: 6,
      name: "Hyacinth white stick",
      price: 599,
      image: "assets/images/product/9.jpg",
    },
    {
      id: 7,
      name: "Glory of the Snow",
      price: 599,
      image: "assets/images/product/4.jpg",
    },
    {
      id: 8,
      name: "Jack in the Pulpit",
      price: 599,
      image: "assets/images/product/5.jpg",
    },

    {
      id: 9,
      name: "Jack in the Pulpit",
      price: 599,
      image: "assets/images/product/5.jpg",
    },
    {
      id: 10,
      name: "Flowers daisy pink stick",
      price: 599,
      image: "assets/images/product/8.jpg",
    },
    {
      id: 11,
      name: "Flowers white",
      price: 599,
      image: "assets/images/product/1.jpg",
    },
    {
      id: 12,
      name: "Flower red stick",
      price: 599,
      image: "assets/images/product/3.jpg",
    },
    
  ];

  const cart = {
    items: [],
    addItem(product) {
      const cartItem = this.items.find((item) => item.id === product.id);
      if (cartItem) {
        cartItem.quantity++;
      } else {
        this.items.push({ ...product, quantity: 1 });
      }
      this.updateCart();
    },
    getTotalItems() {
      return this.items.reduce((total, item) => total + item.quantity, 0);
    },
    getTotalPrice() {
      return this.items
        .reduce((total, item) => total + item.price * item.quantity, 0)
        .toFixed(2);
    },
    updateCart() {
      const cartItemsElement = document.getElementById("cart-items");
      cartItemsElement.innerHTML = "";
      this.items.forEach((item) => {
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.innerHTML = `${item.name} x ${
          item.quantity
        } <span class="float-right">TK ${(item.price * item.quantity).toFixed(
          2
        )}</span>`;
        cartItemsElement.appendChild(li);
      });
      document.getElementById("total-items").textContent = this.getTotalItems();
      document.getElementById(
        "total-price"
      ).textContent = `TK ${this.getTotalPrice()}`;
    },
  };

  const productListElement = document.getElementById("product-list");
  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "col-md-6";
    productCard.innerHTML = `
      <div class="card mb-3">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src="${product.image}" class="card-img" alt="${product.name}">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">TK ${product.price.toFixed(2)}</p>
              <button class="btn btn-primary add-to-cart" data-id="${
                product.id
              }">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    `;
    productListElement.appendChild(productCard);
  });

  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", () => {
      const productId = parseInt(button.getAttribute("data-id"));
      const product = products.find((p) => p.id === productId);
      cart.addItem(product);
    });
  });
});
