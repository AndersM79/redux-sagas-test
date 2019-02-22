import React from 'react';
import { render } from 'react-dom';

import RootApp from './root-app';
import storeConfiguration from './store/store-configuration';

export const store = storeConfiguration(window.__INITIAL_STATE__);


render((
    <RootApp
        store={store}
    />
), document.getElementById('appRoot'));