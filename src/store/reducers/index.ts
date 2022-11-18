
import type { AnyAction } from 'redux';
import { RootCator } from '@/models/App.model';
import payLoads from '../payloads';
import { getAsyncRoutes } from '@/utils';

export default function root (state: RootCator = payLoads.root, action: AnyAction) {
  switch(action.type) {
    case 'SETLOADING':
      return {...state, loading: action.loading};
    case 'SET_ASYNCROUTES':
      const routes = getAsyncRoutes(action.user?.permission);
      return {
        ...state,
        asyncRoutes: {
          ...state.asyncRoutes,
          routes,
        },
      };
    case 'SET_ROUTESCOMPLETE': 
    return {
      ...state,
      asyncRoutes: {
        ...state.asyncRoutes,
        complete: action.complete,
      }
    }
    default:
      return state;
  }
}
