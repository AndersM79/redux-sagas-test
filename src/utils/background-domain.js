import BACKGROUND_ACTIONS from '../actions/background-actions';

const startBackground = {
    type: BACKGROUND_ACTIONS.START_BACKGROUND_SYNC,
}

const stopBackground = {
    type: BACKGROUND_ACTIONS.STOP_BACKGROUND_SYNC,
}

export {
    startBackground,
    stopBackground,
}