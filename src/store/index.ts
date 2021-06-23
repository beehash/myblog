import { combineReducers, createStore } from 'redux';
import { User, ArticleDetail } from './reducers';
import payloads from './payloads';

const rootReducers = combineReducers({user: User, article: ArticleDetail});
const store = createStore(rootReducers, payloads);
export default store;
