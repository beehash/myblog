
import type { AnyAction } from 'redux';
import { RootCator } from '@/models/App.model';
import payLoads from '../payloads';
import { getAsyncRoutes } from '@/utils';
// import { Dispatch } from 'react-redux';
// import { AsyncRoutes } from '@/router/index';

export default function root (state: RootCator = payLoads.root, action: AnyAction) {
  switch(action.type) {
    case 'SETLOADING':
      return {...state, loading: action.loading};
    case 'SET_ASYNCROUTES':
      const routes = getAsyncRoutes(action.user.permission);
      return {
        ...state,
        asyncRoutes: {
          ...state.asyncRoutes,
          routes,
        },
      };
    case 'GETUSER_SUCCESS': 
      console.log(action);
      return {
        ...state,
        asyncRouts: {
          ...state.asyncRoutes,
          success: action.success,
        }
      }
    default:
      return state;
  }
}
