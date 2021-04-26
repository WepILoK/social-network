import React from 'react';
import {Provider} from "react-redux";
import ReactDOM from 'react-dom';
import {HashRouter} from "react-router-dom";

import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./redux/redux-store"

import './index.css';


ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
