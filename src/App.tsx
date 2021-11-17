import React, { useEffect, } from 'react';
// import { BrowserRouter as Router, Switch } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {useLocation, Redirect} from 'react-router-dom';
import Authroute from '@/components/base/AuthRoute';
import AsyncLoadComponent from './hocs/AsyncLoadComponent';
import {hasPermission} from '@/utils';
import routes from '@/router';
import '@/statics/sass/App.scss';

function App(props: any) {
  const dispatch = useDispatch();
  const permissions = useSelector((state: any) => state.user.permissions);
  const location = useLocation();

  useEffect(() => {
    dispatch({type: 'GET_USER', params: {name: 'beehash'}});
    return () => {}
  }, [dispatch]);

  useEffect(() => {
  }, [location]);

  function generateRoutes(routes: RouteConfig[]) {
    return routes.map((item: RouteConfig, index: number) => {
      const CurrentComponent = typeof item.component === 'function' ? item.component : AsyncLoadComponent(item.component);
      const pass = hasPermission(item?.meta?.permission, permissions);
      if(!item.children || !item?.children?.length) {
        return (<Authroute exact={item.exact} pass key={index} path={item.path} render={(props:any) => 
          pass
          ? (<CurrentComponent {...props} />)
          : (<Redirect to="/bidden"/>)} />);
      }

      return (<Authroute exact={item.exact} key={index} path={item.path}  pass render={(props: any) =>
        pass
        ? (<CurrentComponent {...props}>{generateRoutes(item.children || [])}</CurrentComponent>)
        : (<Redirect to="/bidden"/>)
      } />);
    });
  }
  return (
    <div className="container">
      {generateRoutes(routes)}
    </div>
  );
}

export default App;
