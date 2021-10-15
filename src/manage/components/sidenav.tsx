import React from 'react';
import {Link} from 'react-router-dom';
import logo from '@/statics/images/logo.svg';

const list = [{
  id: 1,
  name: '首页',
  path: '/manage',
},{
  id: 2,
  name: '用户管理',
  path: '/manage/user',
}];

export default function SideNav() {
  function generateNavListTemplate() {
    return list.map((item) => (<li key={item.id} className="nav-item px-8"><Link to={item.path} className="clear-default-link-style">{item.name}</Link></li>))
  }

  return (
    <div className="side-nav intheme theme-bg">
      <div className="logo ml-8 mt-12"><img src={logo} alt="logo" /></div>
      <div className="pt-56">
        <ul className="nav-list">
          {generateNavListTemplate()}
        </ul>
      </div>
    </div>
  );
}
