import { put, takeLatest } from 'redux-saga/effects';
import UserApi from '@/apis/user';

function* getUserInfo(action: SagaActionState<{name: string}>): IterableIterator<any> {
  yield put({type: 'SETLOADING', loading: true});
  let user = null;
  try {
    user = yield UserApi.getUser(action.params).then((res) => res.data);
    yield put({type: 'SET_USER', user});
  } catch (err) {
    console.log(err, '获取用户失败')
  } finally {
    yield put({type: 'SET_ASYNCROUTES', user});
    yield put({type: 'SETLOADING', loading: false});
    yield put({type: 'SET_ROUTESCOMPLETE', complete: true });
  }  
}

export function* fetchUserSaga() {
  yield takeLatest('GET_USER', getUserInfo);
}