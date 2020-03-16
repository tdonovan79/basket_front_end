const setEmployee = (employeeObj) => {
    return {
        type: "SET_EMPLOYEE",
        payload: employeeObj
    }
}

const clearEmployee = () => {
    return {
        type: "CLEAR_EMPLOYEE"
    }
}

export default {
    setEmployee,
    clearEmployee
}