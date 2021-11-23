import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import Authroute from '@/components/base/AuthRoute';
import AsyncLoadComponent from '@/hocs/AsyncLoadComponent';
import { matchRoutes } from '@/utils';
import { constantRoutes } from '@/router';
import '@/statics/sass/App.scss';
import { off } from 'process';

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
    const matched = matchRoutes(location.pathname, [...constantRoutes, ...asyncRoutes.routes]);
    console.log(matched);
    if(asyncRoutes.success && !matched) {
      history.push('/bidden');
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
      {generateRoutes([...constantRoutes, ...asyncRoutes.routes])}
    </div>
  );
}

export default App;
