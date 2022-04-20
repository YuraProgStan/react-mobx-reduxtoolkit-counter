import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { storeRedux } from './storeRedux/store.redux'
import { Provider } from 'react-redux'

ReactDOM.render(
    <Provider store={storeRedux}>
    <App />
    </Provider>,

    document.getElementById('root')
);


