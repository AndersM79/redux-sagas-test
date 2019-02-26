const USER_ACTIONS = {
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_ERROR: 'LOGIN_ERROR',
    LOGIN_REQUEST: 'LOGIN_REQUEST',
}

const login = (user, password) => ({
    type: USER_ACTIONS.LOGIN_REQUEST,
    user: user,
    password: password
});

const logOut = () => ({
    type: USER_ACTIONS.LOGOUT
});


const actions = {
    login,
    logOut,
};

export {
    actions
};

export default USER_ACTIONS;
