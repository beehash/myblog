import React, {useEffect} from 'react';
// import { Route } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
// import { BrowserRouter as Router, Switch } from "react-router-dom";
import '@/statics/sass/App.scss';
import Header from '@/components/business/Header';
// import Home from '@/pages/home';
// import CreateNew from '@/pages/createNew';
// import ArticleDetail from '@/pages/article-detail';
import Loading from '@/components/base/Loading';
import Theme from '@/components/base/Theme';
import GirlNav from '@/components/business/GirlNav';
import AuthRoute from '@/components/base/AuthRoute';
import AsyncComponent from '@/components/base/AsyncComponent';

// console.log('AuthRoute', AuthRoute);

export default function Index() {
  const dispatch = useDispatch();
  const routes = useSelector((state: any) => state.routeState);

  useEffect(() => {
    dispatch({type: 'GET_USER', params: {name: 'beehash'}});
  }, []);

  function generateRoutes() {
    const homeRoute = routes.length ? routes.find((item: RouteConfig) => item.name === 'Index') : null;
    // console.log(homeRoute?.children);
    return homeRoute?.children ? (
      homeRoute.children.map((item: RouteConfig, index: number) => {
        const component = AsyncComponent(item.component);
        // console.log(111111, 'homeroute', component);
        return (<AuthRoute exact path={item.path} key={index} component={component} />);
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
        {/* <Router>
          <Switch> */}
        {generateRoutes()}
            {/* <Route exact path="/" component={Home} />
            <Route exact path="/editor" component={CreateNew} />
            <Route exact path="/detail/:articleId" component={ArticleDetail} /> */}
          {/* </Switch>
        </Router> */}
      </div>
    </div>
  )
}
