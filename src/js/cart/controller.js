// import { transformWithEsbuild } from "vite"
import { createModalCartItem, editModalCartItemQuantity} from "./html-helpers"
export class Cart {
  cartItems = []
  total = 0


  openCartModal() {

  }

  clearCart() {
    const modalLI = document.querySelectorAll('#modalOL>li')

    modalLI.forEach(item => {
        return item.remove()    
    })

    return this.cartItems = [];
  }

  addItem(product) {
    const cartItem = {
      id: product.id,
      quantity: 1,
      title: product.title,
      price: product.price
    }

    let currentItem = this.cartItems.find(item => item.id === cartItem.id)

    if (currentItem) {
      let currentId = currentItem.id
      currentItem.quantity++
      editModalCartItemQuantity(currentId, currentItem)

    } else {
      const modalOL = document.querySelector('#modalOL')
      const cartItemEl = createModalCartItem(cartItem)
      
      modalOL.appendChild(cartItemEl)
      this.cartItems.push(cartItem)

    }

  }

  changeQuantity(id) {

  }
}