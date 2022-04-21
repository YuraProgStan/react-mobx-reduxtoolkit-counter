import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { storeRedux } from './storeRedux/store.redux'
import { Provider } from 'react-redux'
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
    <BrowserRouter>
        <Provider store={storeRedux}>
        <App/>
    </Provider>
    </BrowserRouter>
        </React.StrictMode>,

    document.getElementById('root')
);


