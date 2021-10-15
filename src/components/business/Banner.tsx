import React, { useState, useEffect } from 'react';
import logo from '@/statics/images/logo.svg';
import styles from '@/statics/sass/home.module.scss';
import { ArticleCator } from '@/models/Essay.model';
import showdown from 'showdown';
import articleApi from '@/apis/article';

export default function Banner () {
  const [recommend, setRecommend] = useState<ArticleCator>();
  const [todayArticle, setTodayArticle] = useState<string>();
  const converter = new showdown.Converter({
    omitExtraWLInCodeBlocks: true,
    ghCodeBlocks: true,
    requireSpaceBeforeHeadingText: true,
    rawHeaderId: true,
  });

  function getDailyRecommendArticle() {
    articleApi.getDailyRecommendArticle(32).then((data: ArticleCator) => {
      setRecommend(data);
      const html = converter.makeHtml(data.content);
      setTodayArticle(html);
    });
  }

  useEffect(() => {
    getDailyRecommendArticle();
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
              [].map((item, index) =>(
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
        <h3 className={styles.title}>{recommend && recommend.title}</h3>
        <div className={styles.previewer + ' previewer'}>
          <div className={styles['html-previewer']} dangerouslySetInnerHTML={{__html: (todayArticle) || ''}}></div>
        </div>
      </div>
    </div>
  );
}