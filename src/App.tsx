import React from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import store from '@/store';
import Authroute from '@/components/base/AuthRoute';
import Manage from '@/manage/pages/manage';
import Index from '@/pages';

function App() {
  return (
    <Provider store={store}>
      <Router>
        {/* <div className="main-gradient full_gradient js-full-gradient state-full state-complete"></div> */}
        <Switch>
          {/* MANAGE */}
          <Authroute path="/manage" component={Manage} />
          {/* FRONT-END */}
          <Authroute path="/" component={Index} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
