import React from 'react';
import { useSelector } from 'react-redux';
import { Route } from "react-router";

export default function Authroute({path, component, ...rest}: any) {
  const permission = useSelector((state: any) => state.user.permission);

  return (<Route path={path} component={component} {...rest}></Route>);
}
