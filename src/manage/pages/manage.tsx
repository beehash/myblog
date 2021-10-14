import React from 'react';
import { Route } from "react-router";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import '@/statics/sass/App.scss';
import SideNav from '@/manage/components/sidenav';
import UserManage from '@/manage/pages/user';

export default function Backend() {
  return (
    <div className="back-end">
      <div className="nav-list">
        <SideNav />
      </div>
      <div className="container">
        <Router>
          <Route exact path="/"></Route>
          <Route exact path="/user" component={UserManage}></Route>
        </Router>
      </div>
    </div>
  );
}
