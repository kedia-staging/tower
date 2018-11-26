import { combineReducers } from 'redux';

import { userReducers } from './modules/user/index';

const rootReducer = combineReducers({
    user: userReducers.user,
});

export {
    rootReducer,
};
