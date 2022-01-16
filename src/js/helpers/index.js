import { cart } from "../main";
import createElement from "../helpers/createElement"

let total = 0;

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



export { createProductItem }

