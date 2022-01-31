import createElement from "../helpers/createElement"
export function createModalCartItem(cartItem) {

    const cartItemEl = createElement('li', { className: 'modal-cart__item', 'data-id': cartItem.id})
    const cartItemTitleEl = createElement('div', { className: 'modal-cart__title', innerHTML: cartItem.title })
    const productQuantityEl = createElement('div', { className: 'modal-cart__quantity', innerHTML: 'quantity: ' })
    const productInputEl = createElement('input', { className: 'modal-cart__input', type: 'number', value: 1 })
    const productPriceEl = createElement('div', { className: 'modal-cart__price', innerHTML: 'price: ' + cartItem.price })
    cartItemEl.appendChild(cartItemTitleEl)
    cartItemEl.appendChild(productQuantityEl)
    productQuantityEl.appendChild(productInputEl)
    cartItemEl.appendChild(productPriceEl)

    return cartItemEl
}

export function editModalCartItemQuantity (currentId,cartItem){
    const cartItemInput = document.querySelector(`[data-id="${currentId}"] input`)
    cartItemInput.value = cartItem.quantity

}

// make a class for these methods

// class CartView {

// }