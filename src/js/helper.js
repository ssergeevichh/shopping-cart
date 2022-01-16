import { cart } from "./main";

let total = 0;
function createElement(tag, props) {
    const element = document.createElement(tag)
    Object.keys(props).forEach(key => {
        element[key] = props[key]
    })
    return element
}
function createProductItem(product) {
    const item = createElement('div', { className: 'products__item' });
    const productContent = createElement('div', { className: 'products__content' })
    const img = createElement('img', { className: 'products__img', srcset: product['image'] })
    const productsDescription = createElement('div', { className: 'products__descr', innerHTML: product['description'] })
    const productTitle = createElement('div', { className: 'products__title', innerHTML: product['title'] })
    const productSelling = createElement('div', { className: 'products__selling' })
    const productPrice = createElement('div', { className: 'products__price', innerHTML: product['price'] + '$' })
    const addToCart = createElement('button', { className: 'btn add-to-cart', innerHTML: 'Add to cart' })
    addToCart.addEventListener('click', function () {
        const modalOL = document.querySelector('#modalOL')
        modalOL.appendChild(createModalCartItem(product))

        const totalSum = document.querySelector('#total')
        total += product.price
        totalSum.innerHTML = 'total:' + total.toFixed(2)

        cart.addItem(product) // TODO it should work
    })

    item.appendChild(productContent)
    productContent.appendChild(img)
    productContent.appendChild(productTitle)
    productContent.appendChild(productsDescription)
    item.appendChild(productSelling)
    productSelling.appendChild(productPrice)
    productSelling.appendChild(addToCart)

    return item
}
function createModalCartItem(product) {

    const cartItem = createElement('li', { className: 'modal-cart__item' })
    const productTitle = createElement('div', { className: 'modal-cart__title', innerHTML: product.title })
    const productQuantity = createElement('div', { className: 'modal-cart__quantity', innerHTML: 'quantity: ' })
    const productInput = createElement('input', { className: 'modal-cart__input', type: 'number', value: 1 })
    const productPrice = createElement('div', { className: 'modal-cart__price', innerHTML: 'price: ' + product.price })
    cartItem.appendChild(productTitle)
    cartItem.appendChild(productQuantity)
    productQuantity.appendChild(productInput)
    cartItem.appendChild(productPrice)

    return cartItem
}


export { createProductItem }

