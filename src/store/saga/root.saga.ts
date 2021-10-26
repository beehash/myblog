import {all, fork} from 'redux-saga/effects'
import {fetchUserSaga} from './app.saga';

export default function* rootSaga () {
  yield all([fork(fetchUserSaga)]);
}
