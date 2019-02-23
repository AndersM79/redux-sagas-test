import LOGIN_ACTIONS from '../actions/login-actions';

const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case LOGIN_ACTIONS.LOGIN_REQUEST:
            return state;
        case LOGIN_ACTIONS.LOGIN_SUCCESS:
            console.log('Login Success!!', action.token)
            return state;
        case LOGIN_ACTIONS.LOGIN_ERROR:
        console.log('Login ERROR!!', action.error)
            return state;
        case LOGIN_ACTIONS.LOGOUT:
        console.log('Logout!!')
            return state;
        default:
            return state
    }
}

export default loginReducer;
