import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Essay } from '@/models/Essay.model';
import ArticleApi from '@/apis/article'; 
import { timeParser } from '@/utils';
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
  const dispatch = useDispatch();

  const getArticleList = () => {
    dispatch({type: 'SETLOADING', loading: true});
    ArticleApi.getArticles({size: 10}).then((data) => {
      dispatch({type: 'SETLOADING', loading: false});
      setList(data);
      generateListTemplate(true);
    });
  };

  useEffect(() => {
    getArticleList();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function generateIcons (info: Obj, index: number) {
    return Icons.map((icon, index2) => {
      return (
        <span key={index2} className="inline-block mr-8">
          <Icon name={icon.name} className="mr-4" color={icon.color}></Icon>
          {icon.text}({info[icon.key]})
        </span>
      );
    });
  }

  function generateListTemplate(type: boolean = false) {
    if(!type) return '';
    
    if(list.length > 0){
      return (
        <ul>
          {list.map((item: Essay, index) => {
            return (
            <Link to={{pathname: '/detail/'+item.essayId}} className="block" key={index}>
              <li className={`${styles['essay-item']} p-12`} key={item.essayId}>
                <h3 className="text-left essay-title">{ item.title }</h3>
                <p className={'text-justify ' + styles['essay-summary']}>{ item.summary }</p>
                <div className={styles['essay-item-footer']+' boxflex mt-16'}>
                  <div className={`${styles.infos}`}>
                    <span>{item.author} 发布于 {timeParser(item.publishTime)} </span>
                    <span></span>
                  </div>
                  <div className="icons">{ generateIcons(item, index) }</div> 
                </div>
              </li>
            </Link>);
          })}
        </ul>
      );
    } else {
      return (
        <div className="essay-none text-center">
          <div className="none-data mx-auto mt-48"></div>
          <span className="text-none">暂无数据</span>
        </div>
        )
    }
    
  }

  return (
    <div className="essayList">
      {generateListTemplate()}
    </div>
  );
}
