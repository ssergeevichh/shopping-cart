import { createModalCartItem } from "./html-helpers"
export class Cart {
  cartItems = []
  total = 0


  openCartModal() {

  }

  clearCart() {

  }

  addItem(product) {
    const cartItem = {
      id: product.id,
      quantity: 1,
      title: product.title,
      price: product.price
    }
    const cartItemEl = createModalCartItem(cartItem)
    const modalOL = document.querySelector('#modalOL')
    modalOL.appendChild(cartItemEl)
    this.cartItems.push(cartItem)
  }

  changeQuantity(id) {

  }
}