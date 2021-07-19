import type { AnyAction } from 'redux';
const GET_USER = 'GET_USER';

function Theme(state: any = { color: '#125d98', inColor: '#233e8b'}, action: AnyAction) {
  console.log('reducers theme', state, action);
  switch (action.type) {
    case 'SET_THEME':
      return {
        ...state,
        theme: {
          ...state.theme,
          color: action.color
        },
      };
    case 'SET_INTHEME': 
      return {
        ...state,
        theme: {
          ...state.theme,
          inColor: action.inColor
        },
      };
    default:
      return state;
  }
}

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

export { User, ArticleDetail, Theme };
