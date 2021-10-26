import { Action } from 'redux';
declare global {
  interface Obj {
    [key: string]: any;
  }
  interface FormModel {
    field: string;
    value: any;
  }

  interface SagaActionState<T> extends Action {
    params: T;
  }
  
}
export {}
