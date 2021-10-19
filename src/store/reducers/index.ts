import type { AnyAction } from 'redux';
interface stateInit {
  loading: boolean;
}
const rootStateInit = {
  loading: false,
}

export default function rootState (state: stateInit = rootStateInit, action: AnyAction) {
  switch(action.type) {
    case 'SETLOADING':
      return {...state, loading: action.loading};
    default:
      return state;
  }
}
