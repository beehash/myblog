import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import Authroute from '@/components/base/AuthRoute';
import AsyncLoadComponent from '@/hocs/AsyncLoadComponent';
import { matchRoutes } from '@/utils';
import { constantRoutes, AsyncRoutes } from '@/router';
import Footer from '@/components/business/Footer';
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
      const found = matchRoutes(location.pathname, [...constantRoutes, ...AsyncRoutes], false);
      if(location.pathname === '/'){
        history.push('/home');
      } else if(found) {
        const authorized = matchRoutes(location.pathname, [...constantRoutes, ...asyncRoutes.routes], false);
        if(!authorized) history.push('/bidden');
      } else {
        history.push('/404');
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asyncRoutes, location]);

  function generateRoutes(routes: RouteConfig[], ppath?: string) {
    return routes.map((item: RouteConfig, index: number) => {
      const CurrentComponent = typeof item.component === 'function' ? item.component : AsyncLoadComponent(item.component);
      if(!item.children || !item?.children?.length) {
        return (<Authroute exact={item.exact} key={index}
            path={(ppath ? ppath+ '/' : '') + item.path} component={CurrentComponent}></Authroute>);
      }

      return (
        <Authroute exact={item.exact} key={index} path={item.path} render={(props: any) =>
          <CurrentComponent {...props}>
            {generateRoutes(item.children || [], item.path)}
          </CurrentComponent>
      } />);
    });
  }

  return (
    <div className="main-container">
      {asyncRoutes.complete && generateRoutes([...asyncRoutes.routes,...constantRoutes])}
      {asyncRoutes.complete && <Footer/> }
    </div>
  );
}

export default App;
