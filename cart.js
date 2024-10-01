if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  calculateTotal();
  attachQuantityListeners();
  deleteItem();
  addToFavorites();
}

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
  addItems() {
    const cartItem = new ShoppingCartItem(product, quantity);
    this.items.push(cartItem);
  }

  //Remove item from shopping cart
  removeItem(productId) {
    this.items = this.items.filter((item) => item.product.id !== productId);
  }

  //Display cart items
  displayItems() {
    return this.items.forEach((item) =>
      console.log(
        `${item.product.name} - Quantity: ${
          item.quantity
        } - Total: ${getTotalPrice()}`
      )
    );
  }

  //Calculate total price of all the cart items
  getTotalPrice() {
    return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
  }
}

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
