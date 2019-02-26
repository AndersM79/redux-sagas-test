import USER_ACTIONS from '../actions/user-actions';
import initialState from '../constants/state/user-initial-state';

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_ACTIONS.LOGIN_REQUEST:
            return state;
        case USER_ACTIONS.LOGIN_SUCCESS:
            console.log('Login Success!!', action.userData)
            return {
                ...state,
                isLogged: true,
                ...action.userData
            }
        case USER_ACTIONS.LOGIN_ERROR:
            console.log('LoginError!!')
            return {
                ...state,
                isLogged: false
            }
        case USER_ACTIONS.LOGOUT:
            console.log('Logout!!', action.token)
            return {
                ...state,
                isLogged: false
            }
        default:
            return state
    }
}

export default loginReducer;
