import USER_ACTIONS from '../actions/user-actions';

const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_ACTIONS.LOGIN_REQUEST:
            return state;
        case USER_ACTIONS.LOGIN_SUCCESS:
            console.log('Login Success!!', action.token)
            return state;
        case USER_ACTIONS.LOGIN_ERROR:
        console.log('Login ERROR!!', action.error)
            return state;
        case USER_ACTIONS.LOGOUT:
        console.log('Logout!!')
            return state;
        default:
            return state
    }
}

export default loginReducer;
