import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CursorSpecialEffects } from './utils/cursor.js';
import { Route } from "react-router";
import { BrowserRouter as Router, Switch } from "react-router-dom";

const cursorSpecialEffects = new CursorSpecialEffects()
cursorSpecialEffects.init()

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <Router>
        <Switch>
          <Route exact path="/" component={App}></Route>
        </Switch>
      </Router>
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
