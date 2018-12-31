import { takeLatest } from 'redux-saga/effects';
import {
    ADD_USER_LABEL_FETCH,
} from '../../constants';
import { addUserLabelSaga } from './addUserLabelSaga';

export function* rootAddUserLabelSaga() {
    yield takeLatest(ADD_USER_LABEL_FETCH, addUserLabelSaga);
}
