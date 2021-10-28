import type { AnyAction } from 'redux';
import {generateRoutes} from '@/utils'
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

export function routeState (state: RouteConfig[] = [], action: AnyAction) {
  switch(action.type) {
    case 'SET_ROUTE':
      const routes = generateRoutes(action.user.permission, action.user.adminpermission);
      return routes;
    default:
      return state;
  }
}
