export default (state = [], { type, payload }) => {
    switch (type) {
        case 'SET_PRODUCTS':
            return payload;
        case 'DELETE_PRODUCT':
            return deleteProduct(state, payload);
        case 'ADD_PRODUCT':
            return addProduct(state, payload);
        default:
            return state;
    }
};

function deleteProduct(arrOfProducts, oneProduct) {
    return [...arrOfProducts].filter(product => product.id !== oneProduct.id);
}
function addProduct(arrOfProducts, oneProduct) {
    return [...arrOfProducts, oneProduct];
}