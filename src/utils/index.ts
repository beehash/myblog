import { constantRoutes, AsyncRoutes, manageRoutes } from "@/router";
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

function hasPermission(item: RouteConfig, permissions: string[]) {

}

function filterRoutes(routes: RouteConfig[], permissions: string[]): RouteConfig[] {
  // console.log(permissions);
  routes.filter((item) => hasPermission(item, permissions));
  return [];
}
function filterAdminRoutes(routes: RouteConfig[], permissions: string[]): RouteConfig[] {
  // console.log('admin', permissions)
  routes.filter((item) => hasPermission(item, permissions));
  return []
}
export function generateRoutes(permission: string[], adminpermission: string[]) {
  let adminRoutes: RouteConfig[] = [];
  if(adminpermission.length > 0) {
    adminRoutes = filterAdminRoutes(manageRoutes, adminpermission);
  }
  const routes = filterRoutes(AsyncRoutes, permission);
  return constantRoutes.concat(routes, adminRoutes);
}