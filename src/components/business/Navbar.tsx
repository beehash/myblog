import React from 'react';
import {Link} from 'react-router-dom';
import styles from '@/statics/sass/home.module.scss';
import configService from '@/services/config.service';

export default function Navbar() {
  // 生成 navlist
  function generateNavList () {
    return configService.tagType.map((item: {id: number, path: string, name: string}) =>(
      <li key={item.id}><Link to={item.path}>{item.name}</Link></li>
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
