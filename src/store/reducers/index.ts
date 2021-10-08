import type { AnyAction } from 'redux';
interface stateInit{
  loading: boolean;
}
export default function rootState (state: stateInit = {loading: false}, action: AnyAction) {
  switch(action.type) {
    case 'SETLOADING': 
      return {...state, loading: action.loading};
    default:
      return state;
  }
}
