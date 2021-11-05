import React, {Fragment} from 'react';
import { Route } from "react-router";

export default function Authroute({path, component, ...rest}: any) {
  return (
    <Fragment>
      <Route path={path} component={component} {...rest}></Route>
    </Fragment>
  );
}
