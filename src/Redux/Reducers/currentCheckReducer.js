export default (state = { id: -1 }, { type, payload }) => {
    switch (type) {
        case 'SET_CURRENT_CHECK':
            return payload;
        case 'ADD_PRODUCT_TO_CURRENT_CHECK':
            return addProduct(state, payload)
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
        products: currentCheck.products.concat(newProduct)
    }
}
//closes current check
function setStatus(currentCheck, status){
    return {
        ...currentCheck,
        open: status
    }
}