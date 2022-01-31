import { cart } from "../main";
import createElement from "../helpers/createElement"

function createProductItem(product) {
    const productEl = createElement('div', { className: 'products__item' });
    const contentEl = createElement('div', { className: 'products__content' })
    const imgEl = createElement('img', { className: 'products__img', srcset: product['image'] })
    const descriptionEl = createElement('div', { className: 'products__descr', innerHTML: product['description'] })
    const titleEl = createElement('div', { className: 'products__title', innerHTML: product['title'] })
    const sellingEl = createElement('div', { className: 'products__selling' })
    const priceEl = createElement('div', { className: 'products__price', innerHTML: product['price'] + '$' })
    const addToCartBtnEl = createElement('button', { className: 'btn add-to-cart', innerHTML: 'Add to cart' })
    addToCartBtnEl.addEventListener('click', function () {
        cart.addItem(product) // TODO it should work
    })

    contentEl.appendChild(imgEl)
    contentEl.appendChild(titleEl)
    contentEl.appendChild(descriptionEl)
    productEl.appendChild(contentEl)
    productEl.appendChild(sellingEl)
    sellingEl.appendChild(priceEl)
    sellingEl.appendChild(addToCartBtnEl)

    return productEl
}



export { createProductItem }

