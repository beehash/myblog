import { FunctionComponent, Suspense, LazyExoticComponent } from 'react';

export default function AsyncLoadComponent(Component: LazyExoticComponent<FunctionComponent>) {
  return (props: any) => {
    return (<Suspense fallback={<div>Loading...</div>}><Component {...props}/></Suspense>);
  }
}