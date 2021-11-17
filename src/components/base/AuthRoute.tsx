import React, {Fragment} from 'react';
import { Route } from "react-router";

export default function Authroute({path, ...rest}: any) {
  // console.log(path)
  if(path === '/*') {
    console.log(rest);
  }
  return (
    <Fragment>
      <Route path={path} {...rest}></Route>
    </Fragment>
  );
}
