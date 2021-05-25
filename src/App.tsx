import React from 'react';
import logo from './statics/images/logo.svg';
import './statics/sass/App.css';
// import {Link} from 'react-router-dom';

function App() {
  const codeAge:number = new Date().getFullYear() - 2018;

  return (
    <div className="App full_gradient js-full-gradient state-full state-complete">
      {/* header */}
      <div className="center-block header">
        <p className="left-bar">
          <img src={logo} alt="avator" className="avator mr-8 inline-block vertical-middle"/>
          <span className="mr-8 inline-block vertical-middle">beehash 的博客空间</span>
          <span className="inline-block vertical-middle">码龄：{codeAge}</span>
        </p>
        <div className="right-bar">
          
        </div>
      </div>
      {/* banner */}
      <div className="banner">
        <div className="view-box">
          <div className="logo-box">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </div>
        <div className="left-view">
          <p>这是我的博客</p>
          <p>Welcome to aminsey’s Blog</p>
          <p>ここでは笹寺のブログ</p>
        </div>
        <div className="right-view">
          <ul className="list">
            <li>
              <span className="list-item">文章</span>
            </li>
            <li>
              <span className="list-item">随笔</span>
            </li>
            <li>
              <span className="list-item">算法</span>
            </li>
            <li>
              <span className="list-item">框架</span>
            </li>
            <li>
              <span className="list-item">Javascript</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Content */}
      <div className="inner-box">
          <div className="content">
          </div>
        </div>
    </div>
  );
}

export default App;
