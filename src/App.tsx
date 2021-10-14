import React from 'react';
import { Route } from "react-router";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import store from '@/store';
import '@/statics/sass/App.scss';
import Header from '@/components/business/Header';
import Home from '@/pages/home';
import CreateNew from '@/pages/createNew';
import ArticleDetail from '@/pages/article-detail';
import Loading from '@/components/base/Loading';
import Theme from '@/components/base/Theme';
import GirlNav from '@/components/business/GirlNav';
import Manage from '@/manage/pages/manage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        {/* <div className="main-gradient full_gradient js-full-gradient state-full state-complete"></div> */}
        <Loading />
        <Theme />
        <GirlNav/>
        <Switch>
          {/* FRONT-END */}
          <Route exact path="/">
            <Switch>
              {/* APP */}
              <div className="App">
                {/* header */}
                <Header/>
                <div className="container center-block">
                  <Route exact path="/" component={Home} />
                  <Route exact path="/editor" component={CreateNew} />
                  <Route exact path="/detail/:articleId" component={ArticleDetail} />
                </div>
              </div>
            </Switch>
          </Route>
          {/* MANAGE */}
          <Route exact path="/manage" component={Manage} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
