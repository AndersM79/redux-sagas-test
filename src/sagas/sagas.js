import { take, select, all, fork, put, call, cancelled, cancel } from 'redux-saga/effects';

import LOGIN_ACTIONS from '../actions/login-actions';
import Api from '../utils/Api';

//hello world saga
export function* helloWorld() {
    console.log('Hello World')
}

// loger Redux Saga
export function* logger() {
    while (true) {
        const action = yield take('*');
        const state = yield select();
        console.log('action', action);
        console.log('state in action', state);
    }
}

//login saga
export function* authorizeUser(user, password) {
    try {
        const token = yield call(Api.authorize, user, password);
        yield put({ type: LOGIN_ACTIONS.LOGIN_SUCCESS, token });
        yield call(Api.storeItem, token)
    } catch (error) {
        yield put({ type: LOGIN_ACTIONS.LOGIN_ERROR, error })
    } finally {
        if (yield cancelled()) {
            console.log('autorization canceled!!..')
        }
    }
}

export function* LoginFlow() {
    while (true) {
        const { user, password } = yield take(LOGIN_ACTIONS.LOGIN_REQUEST);
        const task = yield fork(authorizeUser, user, password);
        const action = yield take([LOGIN_ACTIONS.LOGOUT, LOGIN_ACTIONS.LOGIN_ERROR])
        if (action.type === LOGIN_ACTIONS.LOGOUT) yield cancel(task);
        yield call(Api.clearItem, 'token')
    }
}

export default function* rootSaga() {
    yield all([
        logger(),
        helloWorld(),
        LoginFlow(),
    ])
};
