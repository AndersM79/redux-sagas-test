import { combineReducers } from 'redux';

import loginReducer from './login-reducer';
import uiReducer from './ui-reducer';

export default combineReducers({
    login: loginReducer,
    ui: uiReducer,
})
