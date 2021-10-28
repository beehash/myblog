import React, {Fragment} from 'react';
import { useSelector } from 'react-redux';
import { Route } from "react-router";
// import {generateRoutes} from '@/utils';

export default function Authroute({path, component, ...rest}: any) {
  const routes = useSelector((state: any) => state.routeState);
  // console.log(routes);

  return (
    <Fragment>
      <Route path={path} component={component} {...rest}></Route>
    </Fragment>
  );
}
