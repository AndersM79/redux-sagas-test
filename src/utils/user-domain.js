import LOGIN_ACTIONS from '../actions/login-actions';

const doLogin = {
    type: LOGIN_ACTIONS.LOGIN_REQUEST,
    user: 'anderson@123',
    password: '123123'
}

const doLogOut = {
    type: LOGIN_ACTIONS.LOGOUT
}

export {
    doLogin,
    doLogOut
}