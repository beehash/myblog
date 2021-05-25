import React, {BaseSyntheticEvent, useState, useEffect} from 'react';
import logo from './statics/images/logo.svg';
import './statics/sass/App.scss';
import HeaderApp from './components/business/Header';

function App() {

  

  return (
    <div className="App full_gradient js-full-gradient state-full state-complete">
      {/* header */}
      <HeaderApp/>
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
