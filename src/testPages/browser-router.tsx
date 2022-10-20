import React, {Component} from 'react';
import Router from './router';
import {createBrowserHistory, History} from 'history';
 
class BrowserRouter extends Component {
  history: History | undefined;

  constructor (props: any) {
    super(props);

    this.history = createBrowserHistory();
  }
  render() { 
    return (<Router history={{history: this.history, count: 'great'}}>{this.props.children}</Router>);
  }
}
 
export default BrowserRouter;