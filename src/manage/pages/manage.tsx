import React from 'react';
import { Route } from "react-router";
import '@/statics/sass/manage.scss';
import SideNav from '@/manage/components/sidenav';
import UserManage from '@/manage/pages/user';
import Index from './index';

export default function Backend() {
  return (
    <div className="manage">
      <div className="side theme theme-bg">
        <SideNav />
      </div>
      <div className="main-container">
        <Route exact path="/manage/" component={Index}></Route>
        <Route path="/manage/user" component={UserManage}></Route>
      </div>
    </div>
  );
}
