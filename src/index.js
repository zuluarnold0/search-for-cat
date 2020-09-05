import React from 'react';
import ReactDOM from 'react-dom';
import App from './search_and_display/containers/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './search_and_display/store/rootReducer';
import { createLogger } from 'redux-logger';
import thunkMiddleWare from 'redux-thunk'

const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(logger, thunkMiddleWare) );

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,document.getElementById('root'));
serviceWorker.unregister();
