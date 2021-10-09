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

function App() {
  // const loading = true;
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          {/* <div className="main-gradient full_gradient js-full-gradient state-full state-complete"></div> */}
          {/* header */}
          <Header/>
          <Loading />
          <Theme />
          <GirlNav/>
          <div className="container center-block">
            <Switch>
              <Route exact path="/" component={Home} />
              {/* <Route exact path="home" component={Home}/> */}
              <Route exact path="/editor" component={CreateNew} />
              <Route exact path="/detail/:articleId" component={ArticleDetail} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
