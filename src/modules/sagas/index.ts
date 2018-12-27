// tslint:disable-next-line
import { all, call } from 'redux-saga/effects';
import { rootAuthSaga } from './authSaga';
import { rootUsersSaga } from './usersSaga';
import { rootUserDataSaga } from './userDataSaga';

export function* rootSaga() {
    yield all([
        call(rootAuthSaga),
        call(rootUsersSaga),
        call(rootUserDataSaga),
    ]);
}
