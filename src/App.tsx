import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Authroute from '@/components/base/AuthRoute';
import AsyncLoadComponent from './hocs/AsyncLoadComponent';
import '@/statics/sass/App.scss';

function App() {
  const dispatch = useDispatch();
  const routes = useSelector((state: any) => state.routeState);

  useEffect(() => {
    dispatch({type: 'GET_USER', params: {name: 'beehash'}});
    return () => {}
  }, [dispatch]);

  function generateRoutes(routes: RouteConfig[]) {
    return routes.map((item: RouteConfig, index: number) => {
      const CurrentComponent = typeof item.component === 'function' ? item.component : AsyncLoadComponent(item.component);
      if(!item.children || !item?.children?.length) {
        return (<Authroute exact={item.exact} key={index} path={item.path} component={CurrentComponent}></Authroute>);
      }

      return (<Authroute exact={item.exact} key={index} path={item.path} render={(props: any) =>
        <CurrentComponent {...props}>{generateRoutes(item.children || [])}</CurrentComponent>
      } />);
    });
  }
  return (
    <div className="App">
      <Router>
        <Switch>
          {generateRoutes(routes)}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
