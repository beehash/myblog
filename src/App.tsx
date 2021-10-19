import React, { Component } from 'react';
import { Route } from "react-router";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import store from '@/store';
import Manage from '@/manage/pages/manage';
import Index from '@/pages';

function XRoute({path, component, ...rest}: any) {
  return (<Route path={path} component={component} {...rest}></Route>)
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        {/* <div className="main-gradient full_gradient js-full-gradient state-full state-complete"></div> */}
        <Switch>
          {/* MANAGE */}
          <XRoute path="/manage" component={Manage}/>
          {/* FRONT-END */}
          <XRoute path="/" component={Index}/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
