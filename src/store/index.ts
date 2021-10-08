import { combineReducers, createStore } from 'redux';
import rootState from './reducers';
import article from './reducers/article';
import {theme, user} from './reducers/app';
import payloads from './payloads';

const rootReducers = combineReducers({rootState, article, theme, user});
const store = createStore(rootReducers, payloads);
export default store;
