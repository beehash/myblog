import React from 'react';
import logo from '@/statics/images/logo.svg';
import styles from '@/statics/sass/home.module.scss';

export default function SideBar({visible}: any) {
  return (
    <div className={styles['side-bar'] + ' ' + (visible ? styles.visible : styles.hidden)}>
      <div className={styles['side-header']+' px-16 mt-16'}>
        <img src={logo} alt="logo.svg" />
        <span className={styles['title']}>beehash's blog</span>
      </div>
      <div className={styles['personal-info']+' px-16'}>
        <p><span className="label">姓名：</span><span className="value">beehash</span></p>
        <p><span className="label">码龄：</span><span className="value">codeAge</span></p>
        <p><span className="label">职称：</span><span className="value">前端开发工程师</span></p>
        <p><span className="label">经验：</span><span className="value">3.5Y</span></p>
      </div>
    </div>
  )
}
