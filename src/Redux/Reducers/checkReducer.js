export default (state = [], { type, payload }) => {
    switch (type) {
        case 'SET_CHECKS':
            return payload;
        case 'DELETE_CHECK':
            return deleteCheck(state, payload);
        case 'ADD_CHECK':
            return addCheck(state, payload);
        // case 'DELETE_PRODUCT':
        //     return deleteProduct(state, payload);
        case 'ADD_PRODUCT':
            return addProduct(state, payload);
        default:
            return state;
    }
};

function deleteCheck(arrOfChecks, oneCheck) {
    return [...arrOfChecks].filter(check => check.id !== oneCheck.id);
}
function addCheck(arrOfChecks, oneCheck) {
    return [...arrOfChecks, oneCheck];
}
function deleteProduct(arrOfChecks, { oneCheck, oneProduct }) {
    let newCheckArray = [...arrOfChecks]
    newCheckArray.map(check => {
        if (check.id === oneCheck) {
            return check.products.filter(product => product.id !== oneProduct.id);
        }
    })
    return newCheckArray
}
function addProduct(arrOfChecks, payload) {
    let newCheckArray = arrOfChecks.slice()
    newCheckArray.map(check => {
        console.log('inside map', check, payload.newCheck, check.id === payload.newCheck.id)
        if (check.id === payload.newCheck.id) {
            return check.products.push(payload.newProduct)
        }
    })
    return newCheckArray
}