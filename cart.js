if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  // Create object class for the product
  class Product {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }

  // Create object class for the shopping cart item
  class ShoppingCartItem {
    constructor(product, quantity) {
      this.product = product;
      this.quantity = quantity;
    }

    //Calculate the total price of the item
    getTotalPrice() {
      return this.product.price * this.quantity;
    }
  }

  //Create object class for the shopping cart
  class ShoppingCart {
    constructor() {
      this.items = [];
    }

    //Add item to shopping cart
    addItems(product, quantity) {
      const cartItem = new ShoppingCartItem(product, quantity);
      this.items.push(cartItem);
    }

    //Remove item from shopping cart
    removeItem(productId) {
      this.items = this.items.filter((item) => item.product.id !== productId);
    }

    //Display cart items
    displayItems() {
      var cartItem = document.getElementsByClassName("cart-items");
      var cartItemArray = Array.from(cartItem);
      console.log(cartItemArray);

      //Display product attributes on the HTML
      this.items.forEach((item) => {
        const cartItemElement = document.createElement("tr");
        cartItemElement.innerHTML = `<tr class="cart-item">
            <td class="item-infos">
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
              />
              <h3 class="item-name">${item.product.name}</h3>
            </td>
            <td class="item-price"><p>$${item.getTotalPrice()}</p></td>
            <td class="item-quantity">
              <input type="number" name="number" value="${
                item.quantity
              }" min="1" />
            </td>
            <td class="item-actions">
              <button class="love">
                <i class="fa-regular fa-heart"></i>
              </button>
              <button class="delete" onclick="removeItem(${item.product.id})">
                <i class="fa-solid fa-trash"></i>
              </button>
            </td>
          </tr>`;
        cartItem[0].appendChild(cartItemElement);
      });
    }

    //Calculate total price of all the cart items
    getTotalPrice() {
      //Display total price on the HTML
      var total = this.items.reduce(
      (total, item) => total + item.getTotalPrice(),
      0
      );
      var totalElement = document.getElementsByClassName('total-price')[0]
      totalElement.textContent = `$${total}`
      console.log(total)
    }
  }

  // Create products
  const product1 = new Product(1, "Laptop", 1000);
  const product2 = new Product(2, "Phone", 500);

  // Create a shopping cart
  const cart = new ShoppingCart();

  // Add items to the cart
  cart.addItems(product1, 1); // Add 1 laptop
  cart.addItems(product2, 2); // Add 2 phones

  // Display cart items
  console.log("Cart Items:");
  cart.displayItems();

  // Display total price of all items in the cart
  console.log("Total Price: $" + cart.getTotalPrice());

  // Remove the phone from the cart
  cart.removeItem(2);

  // Display cart after removal
  console.log("Cart Items after removal:");
  cart.displayItems();
}
/**
  // Calculate the total price
  const calculateTotal = () => {
    var cartItem = document.getElementsByClassName("cart-item");
    var cartItemArray = Array.from(cartItem);
    // console.log(cartItemArray);

    var total = 0;

    cartItemArray.forEach((item) => {
      // console.log(item);

      var priceElement = item.querySelector(".item-price p").textContent;
      var price = Number(priceElement.replace("$", ""));
      // console.log(price);

      var quantityElement = item.querySelector(".item-quantity input");
      var quantity = quantityElement.value;
      // console.log(quantity);

      // Calculate the total based on items price and quantity
      total += price * quantity;
      // console.log(total);
    });
    document.getElementsByClassName("total-price")[0].textContent = `$${total}`;
    // console.log(total);
  };

  // Update the total when quantity changes
  const attachQuantityListeners = () => {
    var cartItem = document.getElementsByClassName("cart-item");
    var cartItemArray = Array.from(cartItem);

    cartItemArray.forEach((item) => {
      // Get the quantity input
      var quantityInput = item.querySelector(".item-quantity input");

      // Recalculate the total on quantity change
      quantityInput.addEventListener("input", calculateTotal);
    });
  };

  // Delete items from cart
  const deleteItem = () => {
    var cartItem = document.getElementsByClassName("cart-item");
    var cartItemArray = Array.from(cartItem);

    cartItemArray.forEach((item) => {
      const deleteButton = item.querySelector(".delete");
      // console.log(deleteButton);

      deleteButton.addEventListener("click", () => {
        // Removes the cart item row
        item.remove();

        // Recalculate the total on item remove
        calculateTotal();
        // console.log("Item removed");
      });
    });
  };

  // Add item to favorites
  const addToFavorites = () => {
    var cartItem = document.getElementsByClassName("cart-item");
    var cartItemArray = Array.from(cartItem);

    cartItemArray.forEach((item) => {
      const favoriteButton = item.querySelector(".love");
      // console.log(favoriteButton);

      favoriteButton.addEventListener("click", () => {
        // Select the favorite button icon
        var favoriteIcon = favoriteButton.querySelector(".fa-regular");
        // console.log(favoriteIcon);

        // Change the icon to onClick
        favoriteIcon.classList.replace("fa-regular", "fa-solid");
      });
    });
  };
*/
