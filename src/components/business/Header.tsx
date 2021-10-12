import React from 'react';
import {Link} from 'react-router-dom';
import logo from '@/statics/images/logo.svg';
import '@/statics/sass/App.scss';
import styles from '@/statics/sass/home.module.scss';
import NavBar from '@/components/business/Navbar';

export default function Header () {
  return (
    <div className={styles['fix-header'] + ' p-12'}>
      <div className={`${styles['header']} center-block boxflex flexalign-center}`}>
        <div className="left-bar boxflex flexalign-center">
        <Link to="/"><span className={`${styles.avator} mr-8`}><img src={logo} alt="avator"/></span></Link>
        <NavBar />
      </div>
        <div className={styles['right-bar']+' mt-6'}>
        <Link to="/editor"><button className="base-button default-button mr-8">写文章</button></Link>
        <button className="base-button text-button">登录</button>
      </div>
      </div>
    </div>
  );
}