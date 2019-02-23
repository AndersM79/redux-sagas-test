import React from 'react';
import { Provider } from 'react-redux';

import IndexComponent from './components/index-component';

const RootApp = (props) => (
    <Provider store={props.store}>
        <IndexComponent />
    </Provider>
);

export default RootApp;
