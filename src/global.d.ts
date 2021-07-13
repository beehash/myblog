declare global {
  interface Obj {
    [key: string]: any;
  }
  interface FormModel {
    field: string;
    value: any;
  }
}
export {}
