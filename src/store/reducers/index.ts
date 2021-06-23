import type { AnyAction } from 'redux';
const GET_USER = 'GET_USER';
// const userstate = {
//   type: GET_USER,
//   user: 'beehash'
// };

function User(state: any = {name: 'beehash'}, action: AnyAction) {
  switch (action.type) {
    case GET_USER:
      return action.user;
    default:
      return state;
  }
}

function ArticleDetail (state: any = {id: '67'}, action: AnyAction) {
  switch(action.type) {
    case 'GET_ID':
      return state.id;
    default:
      return state;
  }
}
export { User, ArticleDetail };
