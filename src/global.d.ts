import { FunctionComponent } from 'react';
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
    errCode?: number;
    errMessage?: string;
  }
  interface Pagenation {
    currentPage: number;
    pageSize?: number;
    total?: number;
  }
  type BlogRespList<T> = Pagenation & { list: T[]; }

  type BlogResponse<T> = AxiosResponse<BlogResp<T>>;

  type BlogResponseList<T> = AxiosResponse<BlogResp<BlogRespList<T>>>;

  type FetchResponse<T> = Promise<BlogResponse<T>>;

  type FetchResponseList<T> = Promise<BlogResponseList<T>>;
  
  type FetchFunction<T> = (...args: any) => FetchResponse<T>;

  type FetchFunctionList<T> = (...args: any) => FetchResponseList<T>;
  interface FetchOpts {
    usedep: boolean;
    deps: [];
    msg: string;
    useloading: boolean;
  }
  type FetchStatus = 'before' | 'pending' | 'completed';
}
export {}
