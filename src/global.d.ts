import { Action } from 'redux';
import {Component, FunctionComponent} from 'react';
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

  interface RouteConfig {
    path: string;
    name: string;
    meta: MetaConfig;
    component: () => import(FunctionComponent);
    children?: routeConfig[];
  }
  
}
export {}
