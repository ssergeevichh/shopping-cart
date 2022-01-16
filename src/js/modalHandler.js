function addEventListenersToCart () {
    const modalOverlay = document.querySelector('.modal-overlay')
    const menuCartButton = document.querySelector('#cart')
    const exitButton = document.querySelector('#exit')
    const overlay = document.querySelector('.modal-overlay')
    const clearCart = document.querySelector('#clear')

    menuCartButton.addEventListener('click', function () {
        modalOverlay.style.backgroundColor = 'rgba(0, 0, 0, .56)'
        modalOverlay.style.display = 'block'
        modalOverlay.style.transform = 'scale(1)'
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

    clearCart.addEventListener('click', function () {
        const modalLI = document.querySelectorAll('#modalOL>li')

        modalLI.forEach(item => {
            return item.remove()
        })
    })


}
export default addEventListenersToCart