// import { transformWithEsbuild } from "vite"
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

    let isExist = false;
    let currentItem;

    this.cartItems.forEach(item => {
      if (item.id === cartItem.id) {
        return currentItem = item, isExist = true, console.log(currentItem);
      }
    })

    if (isExist) {
      currentItem.quantity++
    } else {
      const cartItemEl = createModalCartItem(cartItem)
      const modalOL = document.querySelector('#modalOL')
      modalOL.appendChild(cartItemEl)
      this.cartItems.push(cartItem)
    }

  }

  changeQuantity(id) {

  }
}