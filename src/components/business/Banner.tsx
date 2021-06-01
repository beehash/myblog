import React from 'react';
import logo from '@/statics/images/logo.svg';
import styles from '@/statics/sass/home.module.scss';
import FoldBox from '@/components/base/FoldBox';

export default function Banner () {
  return (
    <div className="banner center-block">
      <div className="center-block">
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
        <div className={`${styles.description} text-left`}>
          <h3>前端构建的问题</h3>
          <ol className="my-12">
            <li>构建时间逐步拉长</li>
            <li>模块标准引领方向</li>
          </ol>
          <FoldBox>
            2002年，ajax 推出，此后前端工作越来愈多
            2006年，jquery 推出
            2009-2011年，commonJs、AMD、UMD 相继为 js 带来了模块规范。同一时期，部分遵循 commonjs 的 node 为 js 带来了运行环境，为前端工程化的解锁奠定了基础。
            Angular、React、Vue 等的相继火爆，也推动了前端的又一波浪潮。
            2015年，HTTP/2.0 推出，同时 JS 迎来了自己的模块标准 ESM
            2018年，Chrome、Safari、Firefox 完成了对 ESM 的支持。
          </FoldBox>
        </div>
      </div>
    </div>
  );
}