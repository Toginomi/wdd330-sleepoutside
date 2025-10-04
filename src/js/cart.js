import {
  getLocalStorage,
  setLocalStorage,
  loadHeaderFooter,
} from "./utils.mjs";

import { cartItemTemplate } from "./ShoppingCart.mjs";

loadHeaderFooter();

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");

  // Add event listener to all remove buttons
  document.querySelectorAll(".cart-card__remove").forEach((button) => {
    button.addEventListener("click", (event) => {
      const productId = event.target.dataset.id;
      removeProductFromCart(productId);
    });
  });
}

function removeProductFromCart(productId) {
  let cartItems = getLocalStorage("so-cart") || [];
  cartItems = cartItems.filter((item) => item.Id !== productId);
  setLocalStorage("so-cart", cartItems);
  renderCartContents(); // Re-render the cart after removing
}

renderCartContents();
