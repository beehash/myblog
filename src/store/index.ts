import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import root from './reducers';
import article from './reducers/article';
import {theme, user} from './reducers/app';
import payloads from './payloads';
import rootSaga from './saga/root.saga';

const sagaMiddleware = createSagaMiddleware();
const rootReducers = combineReducers({root, article, theme, user});
const store = createStore(rootReducers, payloads, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
export default store;
