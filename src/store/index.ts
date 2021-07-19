import { combineReducers, createStore } from 'redux';
import { User, ArticleDetail, Theme } from './reducers';
import payloads from './payloads';

const rootReducers = combineReducers({user: User, article: ArticleDetail, theme: Theme});
const store = createStore(rootReducers, payloads);
export default store;
