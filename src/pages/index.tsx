import React from 'react';
import { Route } from "react-router";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import '@/statics/sass/App.scss';
import Header from '@/components/business/Header';
import Home from '@/pages/home';
import CreateNew from '@/pages/createNew';
import ArticleDetail from '@/pages/article-detail';
import Loading from '@/components/base/Loading';
import Theme from '@/components/base/Theme';
import GirlNav from '@/components/business/GirlNav';

export default function Index() {
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
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/editor" component={CreateNew} />
          <Route exact path="/detail/:articleId" component={ArticleDetail} />
        </Switch>
      </Router>
      </div>
    </div>
  )
}

