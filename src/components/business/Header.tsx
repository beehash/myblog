import React, {BaseSyntheticEvent, useState, useEffect} from 'react';
import logo from '@/statics/images/logo.svg';
import '@/statics/sass/App.scss';
import styles from '@/statics/sass/home.module.scss';
import userApi from '@/apis/user'; 

export default function Header () {
  const codeAge:number = new Date().getFullYear() - 2018;
  const [theme, setTheme] = useState('#ffffff');

  function handleThemeChange (event: BaseSyntheticEvent) {
    const color: string = event.target.value;
    setTheme(color);
    const styleEl: HTMLStyleElement = document.createElement('style');
    styleEl.id = 'theme';
    let styleId = document.getElementById('theme') as HTMLStyleElement;
    if(!styleId) {
      document.head.appendChild(styleEl);
      styleId = document.getElementById('theme') as HTMLStyleElement;;
    }


    const red = parseInt(color.slice(1, 3), 16);
    const green = parseInt(color.slice(3, 5), 16);
    const blue = parseInt(color.slice(5, 7), 16);
    
    const inverseColor = `#${(255-red).toString(16)}${(255-green).toString(16)}${(255-blue).toString(16)}`;

    styleId.innerText = `.theme{color: ${inverseColor};}
                        .theme-bg{background-color: ${color}}
                        .base-button{color: ${color}}
                        .primary-button{color: ${inverseColor};background-color: ${color}}`
  }

  function getUser() {
    userApi.getUser({name: 'aminsey'}).then((res: {name: string}) => {
      console.log(res);
    });
  }

  useEffect(() => {
    getUser();
  });

  return (
    <div className="center-block header mt-8">
      <p className="left-bar">
        <span className={`${styles.avator} mr-8`}><img src={logo} alt="avator"/></span>
        <span className="mr-8 inline-block vertical-middle theme">beehash 的博客空间</span>
        <span className="inline-block vertical-middle theme">码龄：{codeAge} 年</span>
      </p>
      <div className={styles['right-bar']}>
        <span className="mr-8">
          <label className="mr-8 theme">皮肤</label>
          <input type="color" value={theme} onChange={handleThemeChange}/>
        </span>
        <button className="base-button primary-button mr-8">写文章</button>
        <button className="base-button default-button">登录</button>
      </div>
    </div>
  )
}