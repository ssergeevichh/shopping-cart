import createElement from "../helpers/createElement"
export function createModalCartItem(cartItem) {

    const cartItemEl = createElement('li', { className: 'modal-cart__item' })
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


// const totalSum = document.querySelector('#total')
// total += product.price
// totalSum.innerHTML = 'total:' + total.toFixed(2)