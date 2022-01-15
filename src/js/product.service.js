function fetchProduct(url) {
    return fetch(url)
        .then(resData => {
            return resData.json()
        })
        .then(finalData => {
            return finalData
        })
}

export default fetchProduct