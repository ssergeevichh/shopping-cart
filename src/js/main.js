import '../styles/style.scss'
import { createProductItem } from './helper';
import modalListeners from './modalHandler.js';
import fetchProduct from './product.service.js';

const url = 'https://fakestoreapi.com/products'
const list = document.querySelector('.products')


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

modalListeners() //for handle events connected with modal




