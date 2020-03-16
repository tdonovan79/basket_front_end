export default (state = {}, { type, payload }) => {
    switch (type) {
        case 'SET_EMPLOYEE':
            return payload;
        case 'CLEAR_EMPLOYEE':
            return {};
        default:
            return state;
    }
};