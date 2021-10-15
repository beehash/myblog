import React from 'react';
import { Route } from "react-router";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import store from '@/store';
import Manage from '@/manage/pages/manage';
import Index from '@/pages';

function App() {
  return (
    <Provider store={store}>
      <Router>
        {/* <div className="main-gradient full_gradient js-full-gradient state-full state-complete"></div> */}
        <Switch>
          {/* MANAGE */}
          <Route path="/manage" component={Manage}/>
          {/* FRONT-END */}
          <Route path="/" component={Index}/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
