import React from 'react'
import styles from '@/statics/sass/home.module.scss';

export default function Navbar() {
  const navList = [{
    id:1,
    title: '推荐',
  },{
    id: 2,
    title: 'Vue'
  }, {
    id: 3,
    title: 'React',
  }, {
    id: 4,
    title: 'Javascript'
  }, {
    id: 5,
    title: '小程序'
  }, {
    id: 6,
    title: '工具类'
  }];

  // 生成 navlist
  function generateNavList () {
    return  navList.map((item) =>(
      <li key={item.id}>{item.title}</li>
    ));
  }

  return (
    <div className={styles.navBar}>
      <ul>
        {generateNavList()}
      </ul>
    </div>
  );
}
