import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '@/statics/sass/App.scss';
import Header from '@/components/business/Header';
import Loading from '@/components/base/Loading';
import Theme from '@/components/base/Theme';
import GirlNav from '@/components/business/GirlNav';
import { Route } from "react-router";
import AsyncLoadComponent from '@/hocs/AsyncLoadComponent';

export default function Index() {
  const dispatch = useDispatch();
  const routes = useSelector((state: any) => state.routeState);
  

  useEffect(() => {
    dispatch({type: 'GET_USER', params: {name: 'beehash'}});
    return () => {}
  }, [dispatch]);

  function generateRoutes() {
    const homeRoute = routes.length ? routes
      .find((item: RouteConfig) => item.name === 'Index') : null;
    return homeRoute?.children ? (
      homeRoute.children.map((item: RouteConfig, index: number) => {
        return item ? (<Route exact path={item.path} key={index} component={AsyncLoadComponent(item.component)} />) : null;
      })
    )
    : ('');
  }

  return (
    <div className="App">
      {/* Loading */}
      <Loading />
      {/* Theme */}
      <Theme />
      {/* GirlNav */}
      <GirlNav />
      {/* header */}
      <Header />
      {/* container */}
      <div className="container center-block">
        {routes.length ? generateRoutes() : (<div>loading</div>)}
      </div>
    </div>
  )
}
