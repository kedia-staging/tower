// tslint:disable-next-line
import { all, call } from 'redux-saga/effects';
import { rootAuthSaga } from './authSaga';
import { rootUsersSaga } from './usersSaga';
import { rootGetUserDataSaga } from './getUserDataSaga';
import { rootDeleteUserLabelSaga } from './deleteUserLabelSaga';
import { rootAddUserLabelSaga } from './addUserLabelSaga';
import { rootChangeUserStateSaga } from './changeUserStateSaga';
import { rootChangeUserRoleSaga } from './changeUserRoleSaga';
import { rootChangeUserOTPSaga } from './changeUserOTPSaga';

export function* rootSaga() {
    yield all([
        call(rootAuthSaga),
        call(rootUsersSaga),
        call(rootGetUserDataSaga),
        call(rootAddUserLabelSaga),
        call(rootDeleteUserLabelSaga),
        call(rootChangeUserStateSaga),
        call(rootChangeUserRoleSaga),
        call(rootChangeUserOTPSaga),
    ]);
}
