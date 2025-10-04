import { renderListWithTemplate } from "./utils.mjs";

export function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
  <p><span class="cart-card__remove" data-id="${item.Id}">X</span></p>
</li>`;

  return newItem;
}

export default class ShoppingCart {
    constructor(category, dataSource, listElement) {
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
  }

    async init() {
    const cartItems = await this.dataSource.getData();
    this.renderCart(cartItems);
  }

    renderCart(cartItems) {
        renderListWithTemplate(cartItemTemplate, this.listElement, cartItems);
  } 
}