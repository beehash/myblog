import React, { Component } from 'react'
import Router from './browser-router'
import Route from './route';

export default class TestRouter extends Component<any, any> {
  render() {
    return (
      <div>
        <Router>
          <Route>
          </Route>
        </Router>
      </div>
    )
  }
}