// tslint:disable-next-line
import { all, call } from 'redux-saga/effects';
import { rootAuthSaga } from './authSaga';
import { rootUsersSaga } from './usersSaga';
import { rootGetUserDataSaga } from './getUserDataSaga';
import { rootDeleteUserLabelSaga } from './deleteUserLabelSaga';
import { rootAddUserLabelSaga } from './addUserLabelSaga';
import { rootChangeUserStateSaga } from './changeUserStateSaga';

export function* rootSaga() {
    yield all([
        call(rootAuthSaga),
        call(rootUsersSaga),
        call(rootGetUserDataSaga),
        call(rootAddUserLabelSaga),
        call(rootDeleteUserLabelSaga),
        call(rootChangeUserStateSaga),
    ]);
}
