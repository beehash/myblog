/*
 * @Author: Amelia
 * @email: zhangshan1@able-elec.com
 * @Date: 2022-11-18 18:10:05
 */
import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import logo from '@/statics/images/logo.svg';
import '@/statics/sass/App.scss';
import styles from '@/statics/sass/home.module.scss';
import NavBar from '@/components/business/Navbar';
import Modal from '../base/Modal';
import { useSelector } from 'react-redux';
import LoginBox from './LoginBox';
import useVisible from '@/hooks/useVisible';
import { hasPermission } from '@/utils';

const inviteBtnStyle = {
  height: 44+'px',
  lineHeight: 44+ 'px',
  width: 320+ 'px',
  borderRadius: 22 + 'px'
}

export default function Header () {
  const history = useHistory();
  const [inviteCode, setInviteCode] = useState('');
  const {visible, close, show} = useVisible();
  const {visible: loginVisible, close: loginClose, show: showLogin} = useVisible();
  const user = useSelector((state: any) => {
    return state.user;
  });

  function goEditePage() {
    const authed = hasPermission(['editor:view'], user.permission);
    if(!authed) {
      show();
    } else {
      history.push('/editor/'+ encodeURIComponent(inviteCode));
    }
  }

  function confirmVerifyCode() {
    history.push('/editor/'+ encodeURIComponent(inviteCode));
    close();
  }


  return (
    <div className={styles['fix-header'] + ' center-block p-12'}>
      <div className={`${styles['header']} center-block boxflex flexalign-center}`}>
        <div className="left-bar boxflex flexalign-center">
        <Link to="/">
          <span className={`${styles.avator} mr-8`}>
            <img src={logo} alt="avator"/>
          </span>
        </Link>
        <NavBar />
      </div>
        <div className={styles['right-bar']+' mt-6'}>
        <button className="base-button default-button mr-8" onClick={goEditePage}>写文章</button>
        <button className="base-button text-button mr-8" onClick={showLogin}>登录</button>
      </div>
      </div>
      <LoginBox visible={loginVisible} close={loginClose}></LoginBox>
      <Modal title="请输入邀请码" visible={visible}
        showClose={false}
        close={close}
        beforeClose={() => setInviteCode('')}
        concealFooter={true}>
        <div className="row" style={{ textAlign: 'center', marginTop: 8 + 'px' }}>
          <input className="base-input =" style={inviteBtnStyle} value={inviteCode} onChange={(e) => setInviteCode(e.target.value) } />
          <button className="base-button primary-button mt-24" style={inviteBtnStyle} onClick={confirmVerifyCode}>确认</button>
        </div>
      </Modal>
    </div>
  );
}