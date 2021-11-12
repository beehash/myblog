import React, {Fragment} from 'react';
import { Route } from "react-router";

export default function Authroute({path, ...rest}: any) {
  return (
    <Fragment>
      <Route path={path} {...rest}></Route>
    </Fragment>
  );
}
