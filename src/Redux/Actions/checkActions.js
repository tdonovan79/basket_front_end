const setChecks = (arrOfChecks) => {
    return {
        type: "SET_CHECKS",
        payload: arrOfChecks
    }
}

const deleteCheck = (check) => {
    return {
        type: "DELETE_CHECK",
        payload: check
    }
}
const addCheck = (check) => {
    return {
        type: "ADD_CHECK",
        payload: check
    }
}
const addItem = (item, check) => {
    return {
        type: "ADD_ITEM",
        payload: {item, check}
    }
}
const deleteItem = (item, check) => {
    return {
        type: "DELETE_ITEM",
        payload: {item, check}
    }
}

export default {
    setChecks,
    clearEmployee
}