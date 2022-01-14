import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import store from '@/store';
import './index.css';
import App from './App';
import Slot from '@/components/base/Slot';
import Loading from '@/components/base/Loading';
import reportWebVitals from './reportWebVitals';
import { CursorSpecialEffects } from './utils/cursor.js';

const mask = document.createElement('div');
mask.id='modal-root';


const cursorSpecialEffects = new CursorSpecialEffects();
cursorSpecialEffects.init();
document.body.className = 'cursor';
React.createElement(Slot, null, null);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Loading />
      <Router>
        <Switch>
          <App/>
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
document.body.appendChild(mask);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
