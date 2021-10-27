import type { AnyAction } from 'redux';
import {filterRoutes} from '@/utils'
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

export function routeState (state: routeConfig, action: AnyAction) {
  switch(action.type) {
    case 'SET_ROUTE':
      const routes = filterRoutes(action.user);
      return routes;
    default:
      return state;
  }
}
