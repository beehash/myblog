import { constantRoutes, AsyncRoutes } from "@/router";
import crypto from 'crypto-js';
import {matchPath} from 'react-router';

export function createRoot(rootId: string) {
  const el = document.createElement('div');
  el.id = rootId;
  const elroot = document.getElementById(rootId);
  if(!elroot) {
    document.body.appendChild(el);
  }
}

interface SingletonConstructor<T>{
  new(...args: Array<any>): T;
  instance: T;
  getInstance(...args: Array<any>): T;
}

export function singleton<T>(Target: SingletonConstructor<T>) {
  Target.getInstance = function (...args) {
    if(Target.instance) {
      return Target.instance;
    }
    return new Target(...args);
  }
}

export function timeParser(time: number | string, format: string= 'YYYY-mm-dd HH : ii : ss') {
  const dateTime = new Date(time);
  const formatParser = {
    YYYY: dateTime.getFullYear(),
    mm: dateTime.getMonth() + 1,
    dd: dateTime.getDate(),
    HH: dateTime.getHours(),
    ii: dateTime.getMinutes(),
    ss: dateTime.getSeconds(),
    ww: dateTime.getDay(),
  }

  const result = format.replace(/(YYYY|mm|dd|HH|ii|ss|ww)/g, (result, key: string) => {
    const value = (formatParser as Obj)[key] || '00';
    if(result === 'ww') {
      return '星期'+['日','一', '二', '三', '四', '五', '六'][value];
    }
    if(result.length > 0 && value < 10) {
      return '0'+value;
    }
    return value;
  });
  return result;
}

export function hasPermission(myPermission = ['*'], permissions: string[]=[]) {
  if(myPermission.indexOf('*') > -1) {
    return true;
  }
  const result = permissions.some(item => (myPermission.includes(item)));
  return result;
}

function filterRoutes(routes: RouteConfig[], permissions: string[], parentRoute: RouteConfig | null, genroutes: RouteConfig[]) {
  for(let item of routes) {
      const { children, ...route } = item;
      if(!children) { 
        if(hasPermission(item?.meta?.permission, permissions)){
          if(!parentRoute) {
            genroutes.push(route);
          } else {
            !parentRoute.children&& ((parentRoute as any).children = []);
            (parentRoute.children as RouteConfig[]).push(item);
          }
          
        }
      } else {
        if(hasPermission(item?.meta?.permission, permissions)) { 
          filterRoutes(children, permissions, route, genroutes);
          genroutes.push(parentRoute || route);
        }
      }
  }
}

export function getAsyncRoutes(permissions: string[]): RouteConfig[] {
  const routes: RouteConfig[] = [];
  filterRoutes(AsyncRoutes, permissions, null, routes);
  return routes;
}

export function matchRoutes(path: string, routes: RouteConfig[], result: boolean, ppath?: string): true | undefined {
  const allroutes = constantRoutes.concat(routes);
  for(let i = 0, l = allroutes.length; i < l; i++) {
    const {children = [], path: curpath} = allroutes[i];
    if(!children?.length || result) {
        let tpath = (ppath ? ppath + '/' : '') + curpath;
        if(curpath[0] === '/') {
          tpath = curpath;
        }
        const matched = matchPath(path, {path: tpath, exact: true}); 
        if(matched) {
          return true;
        }
    } else {
      const matched = matchRoutes(path, children, result, curpath);
      if(matched) {
        return true;
      }
    }
  }
}
const secretKey = crypto.enc.Utf8.parse('7c9090fdb094e43af90d47933460d413');
const secretIv = crypto.enc.Utf8.parse('d95d4406e8967ab2');
// aes加密
export function aesEncode(data: any) {
  const data2  = crypto.enc.Utf8.parse(JSON.stringify(data));
  const encrypted = crypto.AES.encrypt(data2, secretKey, {
    mode: crypto.mode.CBC,
    iv: secretIv,
    padding: crypto.pad.Pkcs7,
  });
  return encrypted.toString();
}
// aes解密
export function aesDecode(encode: string) {
  const decrypted = crypto.AES.decrypt(encode, secretKey, {
    mode: crypto.mode.CBC,
    iv: secretIv,
    padding: crypto.pad.Pkcs7,
  });
  const data = crypto.enc.Utf8.stringify(decrypted).toString();
  return JSON.parse(data);
}