import type { AnyAction } from 'redux';

export default function article (state: any = {id: '67'}, action: AnyAction) {
  switch(action.type) {
    case 'GET_ID':
      return state.id;
    default:
      return state;
  }
}