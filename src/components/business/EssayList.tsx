import React, { useState, useEffect } from 'react';
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
  // const [iconList, setIconList] = useState<IconCator[]>(Icons);

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
        <Link to={{pathname: '/detail/'+info.essayId}} key={index2}>
          {/* {
            (icon.name === 'acclaim' && info.currentLikeStatus)
            ? (<Icon name="acclaimed" color="#F55C47"></Icon>)
            : (<Icon name={icon.name} color={icon.color}></Icon>) 
          } */}
          <Icon name={icon.name} color={icon.color}></Icon>
          {icon.text}({info[icon.key]})
        </Link>);
    });
  }

  function generateListTemplate() {
    return list.length > 0 && list.map((item: Essay, index) => {
      return (
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
      );
    });
  }

  // function iconClick (info: Obj, iconName: string ,index: number) {
  //   let theList = [...list];
  //   // 点赞
  //   if (iconName === 'acclaim') {
  //     if((theList as Obj)[index].currentLikeStatus) {
  //       (theList as Obj)[index].likes--;
  //     } else {
  //       (theList as Obj)[index].likes++;
  //     }
      
  //     (theList as Obj)[index].currentLikeStatus = !(theList as Obj)[index].currentLikeStatus;
  //     setList([...theList]);
  //   }
  // }

  return (
    <div className="essayList">
      <ul>
        {generateListTemplate()}
        {/* { list.length > 0 && list.map((item: Essay, index) => {
            return (
              <li className={`${styles['essay-item']} p-12 my-8`} key={item.essayId}>
                <h3 className="text-left essay-title">{ item.title }</h3>
                <p className={'text-justify ' + styles['essay-summary']}>{ item.summary }</p>
                <div className={styles['essay-item-footer']+' boxflex mt-16'}>
                  <div className={`${styles.infos}`}>
                    <span>{item.author} 发布于 {item.publishTime} </span>
                    <span></span>
                  </div>
                  <div className="icons">
                    {
                      iconList.map((icon, index2) => {
                        return (
                          <span key={index2} onClick={() => iconClick(item,icon.name, index)}>
                            <Icon name={icon.name === 'acclaim' ? item.currentLikeStatus ? 'acclaimed' : 'acclaim': icon.name} color={icon.color}></Icon>
                            {icon.text}({(item as Obj)[icon.key]})
                          </span>
                        );
                      })
                    }
                  </div> 
                </div>
              </li>
            );
          })
          } */}
      </ul>
    </div>
  );
}
