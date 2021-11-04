import { FunctionComponent } from 'react';
import { Action } from 'redux';
import { Module } from 'webpack';
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
    component: AsyncComponent;
    children?: routeConfig[];
  }

  type AsyncComponent = () => import(JSX.Element);

  interface MetaConfig {
    title: string;
  }
  
}
export {}
