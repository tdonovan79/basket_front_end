export default (state = [], { type, payload }) => {
    switch (type) {
        case 'SET_CHECKS':
            return payload;
        case 'DELETE_CHECK':
            return deleteCheck(state, payload);
        case 'ADD_CHECK':
            return addCheck(state, payload);
        case 'DELETE_PRODUCT':
            return deleteProduct(state, payload);
        case 'ADD_PRODUCT_TO_CHECKS':
            return addProduct(state, payload);
        case 'SET_STATUS':
            return setStatus(state, payload)
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
function deleteProduct(arrOfChecks, payload) {
    let newCheckArray = arrOfChecks.slice()
    console.log('hayyy')
    newCheckArray.map(check => {
        if (check.id === payload.selCheck.id) {
            const index = check.products.findIndex(product => product.id === payload.delProduct.id)
            return check.products.splice(index, 1)
        }
        else {
            return []
        }
    })
    return newCheckArray
}
function addProduct(arrOfChecks, payload) {
    let newCheckArray = arrOfChecks.slice()
    newCheckArray.map(check => {
        if (check.id === payload.newCheck.id) {
            return check.products.push(payload.newProduct)
        }
        else {
            return []
        }
    })
    return newCheckArray
}
//close/opens check
function setStatus(arrOfChecks, payload) {
    let newCheckArray = arrOfChecks.slice()
    newCheckArray.map(check => {
        if (check.id === payload.setCheck.id) {
            return check.open = payload.status
        }
        else {
            return check.open
        }
    })
    return newCheckArray
}