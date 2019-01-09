import { call, put } from 'redux-saga/effects';
import {
    deleteLabelError,
    DeleteUserLabelFetch
} from '../../actions';
import { API } from '../../../api';

export function* deleteUserLabelSaga(action: DeleteUserLabelFetch) {
    try {
        yield call(API.delete(), `/api/v2/barong/admin/users/labels?uid=${action.payload.uid}&key=${action.payload.key}&scope=${action.payload.scope}`);
    } catch (error) {
        yield put(deleteLabelError(error));
    }
}
