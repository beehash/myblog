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