import 'typeface-roboto'
import React from 'react';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';

import './config/font-awesome-config';
import IndexComponent from './components/index-component';
import Spinner from './components/spinner-component';

const RootApp = (props) => (
    <Provider store={props.store}>
        <CssBaseline />
        <IndexComponent />
        <Spinner />
    </Provider>
);

export default RootApp;
