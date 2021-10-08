import React, {BaseSyntheticEvent, useState} from 'react';
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import logo from '@/statics/images/logo.svg';
import '@/statics/sass/App.scss';
import styles from '@/statics/sass/home.module.scss';
import NavBar from '@/components/business/Navbar';

export default function Header () {
  const codeAge:number = new Date().getFullYear() - 2018;
  const [theme, setTheme] = useState('#125d98');
  const dispatch = useDispatch()

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
    dispatch({ type: 'SET_THEME', color, inColor: inverseColor});
    styleId.innerText = `.theme{color: ${inverseColor};}
                        .theme-bg{background-color: ${color}}
                        .base-button{color: ${inverseColor}}
                        ::-webkit-scrollbar-thumb{
                          background-color: ${color}
                        }
                        .default-button{color: ${inverseColor}}
                        .base-button.primary-button{color: ${inverseColor};background-color: ${color}}
                        .base-button.text-button{color: ${inverseColor}}`
  }

  return (
    <div className={styles['fix-header'] + ' theme-bg p-12'}>
      <div className="header center-block boxflex flexalign-center">
        <div className="left-bar boxflex flexalign-center">
        <Link to="/"><span className={`${styles.avator} mr-8`}><img src={logo} alt="avator"/></span></Link>
        {/* <span className="mr-8 inline-block vertical-middle theme">beehash 的博客空间</span>
        <span className="inline-block vertical-middle theme">码龄：{codeAge} 年</span> */}
        <NavBar />
      </div>
        <div className={styles['right-bar']+' mt-6'}>
        {/* <span className="mr-8 mt-4">
          <label className="mr-8 theme">皮肤</label>
          <input type="color" value={theme} onChange={handleThemeChange}/>
        </span> */}
        <Link to="/editor"><button className="base-button default-button mr-8">写文章</button></Link>
        <button className="base-button text-button">登录</button>
      </div>
      </div>
    </div>
  );
}