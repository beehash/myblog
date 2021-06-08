import React, { useState, useEffect } from 'react';
import logo from '@/statics/images/logo.svg';
import styles from '@/statics/sass/home.module.scss';
import MoreBox from '@/components/base/MoreBox';
import { Essay, tagTypes } from '@/models/Essay.model';
import articleApi from '@/apis/article'

export default function Banner () {
  const [recommend, setRecommend] = useState<Essay>();
  function getDailyRecommendArticle() {
    articleApi.getDailyRecommendArticle(32).then((data: Essay) => {
      console.log('getDailyRecommendArticle', data);
      setRecommend(data);
    });
  }
  useEffect(() => {
    getDailyRecommendArticle();
  }, []);

  return (
    <div className="banner center-block pos-relative">
      <div className="view-box">
        <div className="logo-box">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="pole-box"></div>
        <div className={styles['tag-view']}>
          <ul className={styles['tag-list']}>
            {
              tagTypes.map((item, index) =>(
                <li key={index}>
                  <span className={styles['list-item']}>{item}</span>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="left-view text-center">
          <p>这是我的博客</p>
          <p>Welcome to beehash’s Blog</p>
          <p>ここでは笹寺のブログ</p>
        </div>
      </div>
      <div className={`${styles.description} text-left`}>
        <h3>前端构建的问题</h3>
        <ul className="my-12">
          <li>构建时间逐步拉长</li>
          <li>模块标准引领方向</li>
        </ul>
        <MoreBox article-id={recommend && recommend.id}>
          2002年，ajax 推出，此后前端工作越来愈多
          2006年，jquery 推出
          2009-2011年，commonJs、AMD、UMD 相继为 js 带来了模块规范。同一时期，部分遵循 commonjs 的 node 为 js 带来了运行环境，为前端工程化的解锁奠定了基础。
          Angular、React、Vue 等的相继火爆，也推动了前端的又一波浪潮。
          2015年，HTTP/2.0 推出，同时 JS 迎来了自己的模块标准 ESM
          2018年，Chrome、Safari、Firefox 完成了对 ESM 的支持。
        </MoreBox>
      </div>
    </div>
  );
}