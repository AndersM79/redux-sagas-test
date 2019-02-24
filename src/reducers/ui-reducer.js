import UI_ACTIONS from '../actions/ui-actions';
import uiInitialState from '../constants/state/ui-initial-state';

const loginReducer = (state = uiInitialState, action) => {
    switch (action.type) {
        case UI_ACTIONS.SHOW_SPINNER:
            return {
                ...state,
                spinnerActive: true,
            }
        case UI_ACTIONS.HIDE_SPINNER:
            return {
                ...state,
                spinnerActive: false,
            }
        default:
            return state
    }
}

export default loginReducer;
