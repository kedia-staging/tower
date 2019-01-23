import { call, put } from 'redux-saga/effects';
import {
    changeUserRoleError,
    ChangeUserRoleFetch,
} from '../../actions';
import { API } from '../../../api';

export function* changeUserRoleSaga(action: ChangeUserRoleFetch) {
    try {
        yield call(API.put(), `/api/v2/barong/admin/users`, action.payload);
    } catch (error) {
        yield put(changeUserRoleError(error));
    }
}
