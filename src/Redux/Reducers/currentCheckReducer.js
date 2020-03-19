export default (state = { id: -1 }, { type, payload }) => {
    switch (type) {
        case 'SET_CURRENT_CHECK':
            return payload;
        case 'ADD_PRODUCT_TO_CURRENT_CHECK':
            return addProduct(state, payload)
        case 'DELETE_PRODUCT_FROM_CURRENT_CHECK':
            return deleteProduct(state, payload)
        case 'SET_STATUS_CURRENT_CHECK':
            return setStatus(state, payload)
        default:
            return state;
    }
};
//add new product to check
function addProduct(currentCheck, newProduct) {
    return {
        ...currentCheck,
        products: [...currentCheck.products, newProduct]
    }
}
//deletes a product from the current check
function deleteProduct(currentCheck, delProduct) {
    let newProductArray = currentCheck.products.slice()
    const index = currentCheck.products.findIndex(product => product.id === delProduct.id)
    console.log('test', currentCheck.products.splice(index, 1))
    newProductArray.splice(index, 1)
    console.log('products',newProductArray)
    return{
        ...currentCheck,
        products: newProductArray
    }
}
//closes current check
function setStatus(currentCheck, status) {
    return {
        ...currentCheck,
        open: status
    }
}