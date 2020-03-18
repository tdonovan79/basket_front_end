export default (state = { id: -1 }, { type, payload }) => {
    switch (type) {
        case 'SET_CURRENT_CHECK':
            return payload;
        case 'ADD_PRODUCT_TO_CURRENT_CHECK':
            return addProduct(state, payload)
        default:
            return state;
    }
};

function addProduct(currentCheck, newProduct) {
    return {
        ...currentCheck,
        products: currentCheck.products.concat(newProduct)
    }
}