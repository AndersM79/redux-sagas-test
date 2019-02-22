import React from 'react';
import { Provider } from 'react-redux';

const RootApp = (props) => (
    <Provider store={props.store}>
        <div>Hola</div>
    </Provider>
);

export default RootApp;
