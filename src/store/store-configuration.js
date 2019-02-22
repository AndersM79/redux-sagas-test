import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers/root-reducer';
import rootSaga from '../sagas/sagas';


export default (initialState) => {
    let createStoreMiddleware;
    const sagaMiddleware = createSagaMiddleware();
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const middleware = applyMiddleware(sagaMiddleware);
    createStoreMiddleware = composeEnhancers(middleware);

    const store = createStoreMiddleware(createStore)(
        rootReducer,
        initialState,
    );

    sagaMiddleware.run(rootSaga);
    return store;
}



