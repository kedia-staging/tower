import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import App from './App';
import { appReducer } from './modules/reducers';
import { rootSaga } from './modules';
import * as serviceWorker from './serviceWorker';

const composeEnhancer: typeof compose = (window as any)
    .__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    appReducer,
    composeEnhancer(
      applyMiddleware(sagaMiddleware)
    ),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
