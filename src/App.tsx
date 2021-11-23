import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import Authroute from '@/components/base/AuthRoute';
import AsyncLoadComponent from '@/hocs/AsyncLoadComponent';
import { matchRoutes } from '@/utils';
import { constantRoutes, AsyncRoutes } from '@/router';
import '@/statics/sass/App.scss';

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const asyncRoutes = useSelector((state: any) => state.root.asyncRoutes);

  useEffect(() => {
    dispatch({type: 'GET_USER', params: {name: 'beehash'}});
    return () => {}
  }, [dispatch]);

  useEffect(() => {
    if(asyncRoutes.complete) {
      const found = matchRoutes(location.pathname, [...constantRoutes, ...AsyncRoutes]);
      if(found) {
        const authorized = matchRoutes(location.pathname, [...constantRoutes, ...asyncRoutes.routes]);
        if(!authorized) history.push('/bidden');
      }else {
        history.push('/404');
      }
    }
  }, [asyncRoutes, location, history]);

  function generateRoutes(routes: RouteConfig[]) {
    return routes.map((item: RouteConfig, index: number) => {
      const CurrentComponent = typeof item.component === 'function' ? item.component : AsyncLoadComponent(item.component);
      if(!item.children || !item?.children?.length) {
        return (<Authroute exact={item.exact} key={index}
            path={item.path} component={CurrentComponent}></Authroute>);
      }

      return (
        <Authroute exact={item.exact} key={index} path={item.path} render={(props: any) =>
          <CurrentComponent {...props}>
            {generateRoutes(item.children || [])}
          </CurrentComponent>
      } />);
    });
  }

  return (
    <div className="container">
      {asyncRoutes.complete && generateRoutes([...constantRoutes, ...asyncRoutes.routes])}
    </div>
  );
}

export default App;
