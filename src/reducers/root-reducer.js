import { combineReducers } from 'redux';

import userReducer from './user-reducer';
import uiReducer from './ui-reducer';
import labelsReducer from './labels-reducer';

export default combineReducers({
    user: userReducer,
    ui: uiReducer,
    labels: labelsReducer,
})
