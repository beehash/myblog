import React, { useState, useEffect } from 'react';
import { Essay } from '@/models/Essay.model';
import ArticleApi from '@/apis/article'; 
import styles from '@/statics/sass/essay.module.scss';
import Icon from '@/components/base/Icon';

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

  function generateIcons () {
    return ['comment', 'acclaim', 'browsers', 'transmit'].map((item, index) => {
      return (<Icon name={item} key={index}></Icon>);
    });
  }

  function generateListTemplate() {
    return list.length > 0 && list.map((item: Essay) => {
      return (
        <li className={`${styles['essay-item']} p-12 my-8 theme`} key={item.essayId}>
          <h3 className="text-left essay-title">{ item.title }</h3>
          <p className={'text-justify ' + styles['essay-summary']}>{ item.summary }</p>
          <div className={styles['essay-item-footer']}>
            { generateIcons() }
          </div>
        </li>
      );
    })
  }

  return (
    <div className="essayList">
      <ul>
        { generateListTemplate() }
      </ul>
    </div>
  );
}
