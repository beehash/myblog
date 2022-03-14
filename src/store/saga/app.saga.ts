import { put, takeLatest } from 'redux-saga/effects';
import UserApi from '@/apis/user';

function* getUserInfo(action: SagaActionState<{name: string}>): IterableIterator<any> {
  yield put({type: 'SETLOADING', loading: true});
  const user = yield UserApi.getUser(action.params).then((res) => res.data);
  yield put({type: 'SETLOADING', loading: false});
  if(user) {
    yield put({type: 'SET_USER', user});
    yield put({type: 'SET_ASYNCROUTES', user});
  }
  
  yield put({type: 'SET_ROUTESCOMPLETE', complete: true });
}

export function* fetchUserSaga() {
  yield takeLatest('GET_USER', getUserInfo);
}