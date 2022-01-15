function createElement(tag, props){
    const element = document.createElement(tag)
    Object.keys(props).forEach(key => {
        element[key] = props[key] 
    })
    return element
}
export default createElement