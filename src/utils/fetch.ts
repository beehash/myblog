import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';

interface Obj {
  [key: string]: any;
}
interface BlogResponse <T>{
  code: number;
  data: T;
  message: string;
  errCode: number;
  errMessage: string;
}

function responseInterceptorUse(response: AxiosResponse) {
  if(response.status === 200) {
    return response.data.data;
  } else if(response.status > 200 && response.status <500) {
    return response.data.data;
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
    timeout: 1000,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
    validateStatus: (status: number) => {
      return status >= 200 && status <= 500;
    }
  });

  static get<T=any, R=BlogResponse<T>>(url: string, params: any): Promise<R> {
    return this.fetchInstance.get(url, {params});
  }
  static post<T=any, R=BlogResponse<T>>(url: string, params: any): Promise<R> {
    return this.fetchInstance.post(url, params);
  }
}

export default fetch;