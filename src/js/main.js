import '../styles/style.scss'
import createElement from './createElement.js';
import fetchProduct from './product.service.js';

const url = 'https://fakestoreapi.com/products'
const list = document.querySelector('.products')


function createProductItem(product) {
    const item = createElement('div', { className: 'products__item' });
    const productContent = createElement('div', { className: 'products__content' })
    const img = createElement('img', { className: 'products__img', srcset: product['image'] })
    const productsDescription = createElement('div', { className: 'products__descr', innerHTML: product['description'] })
    const productTitle = createElement('div', { className: 'products__title', innerHTML: product['title'] })
    const productSelling = createElement('div', { className: 'products__selling' })
    const productPrice = createElement('div', { className: 'products__price', innerHTML: product['price'] + '$' })
    const cartBtn = createElement('button', { className: 'btn add-to-cart', innerHTML: 'Add to cart' })

    cartBtn.addEventListener('click', function () {
        createProductItem(product) //checkPoint
        modalOL.appendChild(listItem)
    })

    item.appendChild(productContent)
    productContent.appendChild(img)
    productContent.appendChild(productTitle)
    productContent.appendChild(productsDescription)
    item.appendChild(productSelling)
    productSelling.appendChild(productPrice)
    productSelling.appendChild(cartBtn)

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

fetchProduct(url).then(data => {
    const newArray = data.map(obj => {
        let title = obj.title
        if (title.length > 30) {
            obj.title = title.slice(0, 30) + '...'
        }

        return {
            ...obj,
            description: obj.description.slice(0, 250) + '...'
        }
    })
    newArray.forEach(product => list.appendChild(createProductItem(product)))
})

const modalOverlay = document.querySelector('.modal-overlay')
const cartButton = document.querySelector('#cart')
const exitButton = document.querySelector('#exit')
const modalOL = document.querySelector('#modalOL')
const overlay = document.querySelector('.modal-overlay')
const clearCart = document.querySelector('#clear')
const modalLI = document.querySelectorAll('#modalOL>li')
const quantityInput = document.querySelector('.modal-cart__input')
const totalSum = document.querySelector('#total')


cartButton.addEventListener('click', function () {
    modalOverlay.style.backgroundColor = 'rgba(0, 0, 0, .56)'
    modalOverlay.style.display = 'block'
    modalOverlay.style.transform = 'scale(1)'

})
clearCart.addEventListener('click', function () {
    const modalLI = document.querySelectorAll('#modalOL>li')

    modalLI.forEach(item => {
        item.style.transition = 'all .5s'
        item.style.transform = 'translateX(1000px)'
        return item.remove()
    })
})

document.addEventListener('click', function ({ target }) {
    if (target === exitButton || target === overlay) {
        modalOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0)'
        setTimeout(() => {
            return modalOverlay.style.transition = 'all .3s', modalOverlay.style.transform = 'scale(0.1)'
        }, 100)
        setTimeout(() => modalOverlay.style.display = '', 200)
    }
})
function countTotal(arr) {

}


