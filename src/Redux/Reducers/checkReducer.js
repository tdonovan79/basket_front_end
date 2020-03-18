export default (state = [], { type, payload }) => {
    switch (type) {
        case 'SET_CHECKS':
            return payload;
        case 'DELETE_CHECK':
            return deleteCheck(state, payload);
        case 'ADD_CHECK':
            return addCheck(state, payload);
        case 'DELETE_ITEM':
            return deleteItem(state, payload);
        case 'ADD_ITEM':
            return addItem(state, payload);
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
function deleteItem(arrOfChecks, { oneCheck, oneItem }) {
    let newCheckArray = [...arrOfChecks]
    newCheckArray.map(check => {
        if (check.id === oneCheck) {
            check.items.filter(item => item.id !== oneItem.id);
        }
    })
    return newCheckArray
}
function addItem(arrOfChecks, { oneCheck, oneItem }) {
    let newCheckArray = [...arrOfChecks]
    newCheckArray.map(check => {
        if (check.id === oneCheck) {
            check.items.filter(item => item.id !== oneItem.id);
        }
    })
    return newCheckArray
}