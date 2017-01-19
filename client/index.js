import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import routes from './routes';

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

ReactDOM.render(
    <Provider store={ store }>
        <Router history={ browserHistory } routes={ routes } />
    </Provider>, document.getElementById("app")
);