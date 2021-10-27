import { put, takeLatest } from 'redux-saga/effects';
import UserApi from '@/apis/user';

function* getUserInfo(action: SagaActionState<{name: string}>): IterableIterator<any> {
  const user = yield UserApi.getUser(action.params);
  yield put({type: 'SET_USER', user});
  yield put({type: 'SET_ROUTES', permission: user});
}

export function* fetchUserSaga() {
  yield takeLatest('GET_USER', getUserInfo);
}