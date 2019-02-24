import React from 'react';
import { Provider } from 'react-redux';

import './config/font-awesome-config';
import IndexComponent from './components/index-component';
import Spinner from './components/spinner-component';

const RootApp = (props) => (
    <Provider store={props.store}>
        <IndexComponent />
        <Spinner />
    </Provider>
);

export default RootApp;
