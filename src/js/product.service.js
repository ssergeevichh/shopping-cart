function fetchProduct(url) {
    return fetch(url)
        .then(resData => {
            return resData.json()
        })
        .then(finalData => {
            return finalData.data
        })
}

export default fetchProduct