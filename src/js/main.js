import '../styles/style.scss'
import { Cart } from './cart/controller';
import { createProductItem } from './helpers/index'
import addEventListenersToCart from './modalHandler.js';
import fetchProduct from './product.service.js';
import faker from '@faker-js/faker';

// const arr = new Array(10).fill(null).map((value, index) => {
// return {
//     id: faker.internet.ip(),
//     title: faker.commerce.productName(),
//     description: faker.commerce.productDescription(),
//     price: faker.commerce.price(),
//     image: faker.image.fashion()
// }
// })
// const productItems = JSON.stringify(arr, null, 2)
// console.log(productItems);

const url = 'https://lorem-json.herokuapp.com/api/piece/61f8fdde9f2781452ddf2531'
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

