export default (state = {id: -1}, { type, payload }) => {
    switch (type) {
        case 'SET_CURRENT_CHECK':
            return payload;
        default:
            return state;
    }
};