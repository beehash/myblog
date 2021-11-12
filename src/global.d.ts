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
    exact?: boolean;
    meta?: MetaConfig;
    component: LazyExoticComponent<FunctionComponent>;
    children?: routeConfig[];
  }

  interface MetaConfig {
    title: string;
    permission?: string[];
  }

  interface BlogResp <T>{
    success: boolean;
    code: number;
    data?: T;
    message: string;
    errCode: number;
    errMessage: string;
  }
  type BlogResponse<T> = AxiosResponse<BlogResp<T>>;
  
}
export {}
