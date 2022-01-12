import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import useFetchList from '@/hooks/useFetchList';
import { Essay } from '@/models/Essay.model';
import ArticleApi from '@/apis/article'; 
import { timeParser } from '@/utils';
import styles from '@/statics/sass/essay.module.scss';
import Icon from '@/components/base/Icon';
import Pagenation from '@/components/base/Pagenation';

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

interface PagenationCator{
  pageSize: number;
  total: number;
  currentPage: number;
}

export default function EssayList({keyId}:any) {
  const [pagenation, setPagenation] = useState<PagenationCator>({pageSize: 10, currentPage: 1, total: 20});
  const [updated, setUpdated] = useState<boolean>(false);
  const {total, ...others} = pagenation;
  const {loading, list} = useFetchList(ArticleApi.getArticles, others, {usedep: true});

  useEffect(() => {}, [list]);

  useEffect(() => {
    setUpdated(true);
  }, [loading])

  function generateListTemplate() {
    if((!updated)) return '';
    if(!list || !list.length) {
      return (
        <div className="blank-none text-center">
          <div className="none-data mx-auto mt-48"></div>
          <span className="text-none">暂无数据</span>
        </div>
      );
    }

    return (
      <ul>
        {list.map((item: Essay, index) => {
          return (
          <Link to={{pathname: '/article/detail/'+item.articleId}} className="block" key={index}>
            <li className={`${styles['essay-item']} p-12`} key={item.articleId}>
              <h3 className={'text-left theme ' + styles['essay-title']}>{ item.title }</h3>
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
  }

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

  return (
    <div className={styles.essay + ' clearfix'}>
      <div className={styles.essayList}>
        {generateListTemplate()}
      </div>
      <Pagenation
        className='mr-16'
        pageSize={pagenation.pageSize}
        current={pagenation.currentPage}
        total={pagenation.total}
        change={(type: string, currentPage: number) => (setPagenation({...pagenation, currentPage}))} />
    </div>
  );
}
