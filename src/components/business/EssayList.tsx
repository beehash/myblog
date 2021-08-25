import React, { useState, useEffect, Fragment } from 'react';
import {Link} from 'react-router-dom';
import { Essay } from '@/models/Essay.model';
import ArticleApi from '@/apis/article'; 
import styles from '@/statics/sass/essay.module.scss';
import Icon from '@/components/base/Icon';
const Icons: IconCator[] = [
  {name: 'acclaim', color: '#A2B29F', text: '点赞量', key: 'likes'},
  {name: 'browsers', color: '#A2B29F', text: '浏览量', key: 'browser'},
  {name: 'transmit', color: '#A2B29F', text: '转发量', key: 'trans'},
  {name: 'comment', color: '#A2B29F', text: '评论数', key: 'comments'}
];
interface IconCator {
  name: string;
  color: string;
  text: string;
  key: string;
}

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

  useEffect(() => {
    generateListTemplate();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list]);

  function generateIcons (info: Obj, index: number) {
    return Icons.map((icon, index2) => {
      return (
        <Fragment key={index2}>
          <Icon name={icon.name} className="mr-4" color={icon.color}></Icon>
          {icon.text}({info[icon.key]})
        </Fragment>
      );
    });
  }

  function generateListTemplate() {
    return list.length > 0 && list.map((item: Essay, index) => {
      return (
      <Link to={{pathname: '/detail/'+item.essayId}} className="mr-12" key={index}>
        <li className={`${styles['essay-item']} p-12 my-8`} key={item.essayId}>
          <h3 className="text-left essay-title">{ item.title }</h3>
          <p className={'text-justify ' + styles['essay-summary']}>{ item.summary }</p>
          <div className={styles['essay-item-footer']+' boxflex mt-16'}>
            <div className={`${styles.infos}`}>
              <span>{item.author} 发布于 {item.publishTime} </span>
              <span></span>
            </div>
            <div className="icons">{ generateIcons(item, index) }</div> 
          </div>
        </li>
      </Link>);
    });
  }

  return (
    <div className="essayList">
      <ul>
        {generateListTemplate()}
      </ul>
    </div>
  );
}
