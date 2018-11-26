import { compose, createStore } from 'redux';
import { rootReducer } from './reducer';

const composeEnhancer: typeof compose = (window as any)
    .__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function configureStore(initialState = {}) {
    return createStore(
        rootReducer,
        initialState,
        composeEnhancer(),
    );
}

const store = configureStore();

export {
    store,
};
