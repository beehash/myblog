import React from 'react';
const list = [{
  id: 1,
  name: '用户管理',
}];

export default function SideNav() {
  function generateNavListTemplate() {
    return list.map((item) => (<li key={item.id} className="nav-item">{item.name}</li>))
  }

  return (
    <div className="side-nav">
      <ul>
        {generateNavListTemplate()}
      </ul>
    </div>
  );
}
