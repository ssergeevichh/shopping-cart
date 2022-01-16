import '../styles/style.scss'
import { Cart } from './cart/controller';
import { createProductItem } from './helpers/index'
import addEventListenersToCart from './modalHandler.js';
import fetchProduct from './product.service.js';

const url = 'https://fakestoreapi.com/products'
const list = document.querySelector('.products')

const cart = new Cart()


fetchProduct(url).then(data => {
    const newArray = data.map(obj => {
        let title = obj.title
        if (title.length > 15) {
            obj.title = title.slice(0, 15) + '...'
        }

        return {
            ...obj,
            description: obj.description.slice(0, 250) + '...'
        }
    })
    newArray.forEach(product => list.appendChild(createProductItem(product)))
})

addEventListenersToCart() //for handle events connected with modal

export { 
  cart
}

