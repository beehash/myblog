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

  interface MetaConfig {
    title?: string;
    permission?: string[];
  }
  interface RouteConfig {
    path: string;
    name: string;
    meta?: MetaConfig;
    component: () => import(FunctionComponent);
    children?: routeConfig[];
  }

  interface MetaConfig {
    title: string;
  }
  
}
export {}
