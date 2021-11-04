import React, {Fragment} from 'react';
import { useSelector } from 'react-redux';
import { Route } from "react-router";

export default function Authroute({path, component, ...rest}: any) {
  const routes = useSelector((state: any) => state.routeState);

  return (
    <Fragment>
      <Route path={path} component={component} {...rest}></Route>
    </Fragment>
  );
}
