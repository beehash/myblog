import React, { Component } from 'react'
import contextRouter from './context';

export default class Router extends Component<any, any> {
  static contextType: React.Context<any> = contextRouter;

  render() {
    const {history, children} = this.props;
    return (
      <div>
      <contextRouter.Provider value={history}>
        {children}
      </contextRouter.Provider>
      </div>
    )
  }
}
