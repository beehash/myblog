/*
 * @Author: Amelia
 * @email: zhangshan1@able-elec.com
 * @Date: 2022-11-18 18:10:05
 */
import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import Message from '@/utils/message';

function responseInterceptorUse(response: AxiosResponse<BlogResp<any>>) {
  if(response.status >= 200 && response.status < 300) {
    if(response.data.code < 0) {
      Message.error(response.data.errMessage as string);
    }
    return response.data;
  } else if(response.status > 200 && response.status <500) {
    return response.data;
  } else if(response.status >= 500) {
    Message.error('服务器错误');
    return {status: 500, success: false,  message: '服务器错误', data: 10086 };
  }
}

function responseInterceptor (target: Obj, name: string) {
  target[name].interceptors.response.use(responseInterceptorUse, (error: string) => {throw new Error(error);})
}

function requestInterceptorUse (config: AxiosRequestConfig) {
  return config;
}

function requestInterceptor(target: Obj, name: string) {
  target[name].interceptors.request.use(requestInterceptorUse, (error: any) => { throw new Error(error) });
}

class fetch {
  @requestInterceptor
  @responseInterceptor
  private static fetchInstance: AxiosInstance = axios.create({
    timeout: 3000000,
    baseURL: '/blog/api',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
    validateStatus: (status: number) => {
      return status >= 200 && status <= 500;
    }
  });

  static get<T=any, R=BlogResponse<T>>(url: string, params?: any, config?: AxiosRequestConfig): Promise<R> {
    return this.fetchInstance.get(url, {...config, params});
  }
  static post<T=any, R=BlogResponse<T>>(url: string, params?: any, config?: AxiosRequestConfig): Promise<R> {
    return this.fetchInstance.post(url, params, config);
  }
  static put<T=any, R=BlogResponse<T>>(url: string, params?: any,config?: AxiosRequestConfig ): Promise<R> {
    return this.fetchInstance.put(url, params, config);
  }
  static head<T=any, R=BlogResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.fetchInstance.head(url, config);
  }
}

export default fetch;