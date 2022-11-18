import type { AnyAction } from 'redux';

export function theme(state: any = { color: '#125d98', inColor: '#233e8b'}, action: AnyAction) {
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

export function user(state: any = {name: 'beehash'}, action: AnyAction) {
  switch (action.type) {
    case 'SET_USER':
      return {...state, ...action.user};
    case 'SET_INVITECODE': 
      return {...state, inviteCode: action.inviteCode};
    default:
      return state;
  }
}