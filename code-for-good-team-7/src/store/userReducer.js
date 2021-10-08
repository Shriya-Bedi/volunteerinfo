const userReducer = (state = null, action) => {
    switch (action.type) {
        case 'ATTEMPT_LOGIN':
            return action.payload;
        default:
            return state;
    }
};

export default userReducer;
