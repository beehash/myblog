import type { AnyAction } from 'redux';
import {RootCator} from '@/models/App.model';
import payLoads from '../payloads';

export default function root (state: RootCator = payLoads.root, action: AnyAction) {
  switch(action.type) {
    case 'SETLOADING':
      return {...state, loading: action.loading};
    default:
      return state;
  }
}
