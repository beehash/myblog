import { put, takeLatest } from 'redux-saga/effects';
import UserApi from '@/apis/user';

function* getUserInfo(action: SagaActionState<{name: string}>): IterableIterator<any> {
  yield put({type: 'SETLOADING', loading: true});
  const user = yield UserApi.getUser(action.params);
  yield put({type: 'SETLOADING', loading: false});
  yield put({type: 'GETUSER_SUCCESS', success: true });
  yield put({type: 'SET_USER', user});
  yield put({type: 'SET_ASYNCROUTES', user});
}

export function* fetchUserSaga() {
  yield takeLatest('GET_USER', getUserInfo);
}