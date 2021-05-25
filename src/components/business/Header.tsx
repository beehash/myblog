import React, {useState, useEffect} from 'react';
import logo from '@/statics/images/logo.svg';
import '@/statics/sass/App.scss';
import styles from '@/statics/sass/header.module.scss';

export default function Header () {
  const codeAge:number = new Date().getFullYear() - 2018;
  const [theme, setTheme] = useState('#ffffff');

  return (
    <div className="center-block header">
        <p className="left-bar">
          <img src={logo} alt="avator" className="avator mr-8 inline-block vertical-middle"/>
          <span className="mr-8 inline-block vertical-middle">beehash 的博客空间</span>
          <span className="inline-block vertical-middle">码龄：{codeAge} 年</span>
        </p>
        <div className={`${styles['mr-12']} right-bar`}>
          <input type="color" value={theme} onChange={(e) => setTheme(e.target.value)}/>
        </div>
      </div>
  )
}