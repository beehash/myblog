import React, { useState, useEffect } from 'react';
import { Essay } from '@/models/Essay.model';
import ArticleApi from '@/apis/article'; 
import styles from '@/statics/sass/essay.module.scss';
import Icon from '@/components/base/Icon';
const Icons = [
  {name: 'acclaim', color: '#A2B29F', text: '点赞量', key: 'likes'},
  {name: 'browsers', color: '#A2B29F', text: '浏览量', key: 'browser'},
  {name: 'transmit', color: '#A2B29F', text: '转发量', key: 'trans'},
  {name: 'comment', color: '#A2B29F', text: '评论数', key: 'comments'}
];

export default function EssayList() {
  const [list, setList] = useState<Essay[]>([]);

  const getArticleList = () => {
    ArticleApi.getArticles({size: 10}).then((data) => {
      setList(data);
    });
  };

  useEffect(() => {
    getArticleList();
  }, []);

  function generateIcons (info: Obj) {
    return Icons.map((item, index) => {
      return (<span key={index}><Icon name={item.name} color={item.color}></Icon>{item.text}({info[item.key]})</span>);
    });
  }

  function generateListTemplate() {
    return list.length > 0 && list.map((item: Essay) => {
      return (
        <li className={`${styles['essay-item']} p-12 my-8`} key={item.essayId}>
          <h3 className="text-left essay-title">{ item.title }</h3>
          <p className={'text-justify ' + styles['essay-summary']}>{ item.summary }</p>
          <div className={styles['essay-item-footer']+' boxflex mt-16'}>
            <div className={`${styles.infos}`}>
              <span>{item.author} 发布于 {item.publishTime} </span>
              <span></span>
            </div>
            <div className="icons">{ generateIcons(item) }</div> 
          </div>
        </li>
      );
    });
  }

  return (
    <div className="essayList">
      <ul>
        { generateListTemplate() }
      </ul>
    </div>
  );
}
