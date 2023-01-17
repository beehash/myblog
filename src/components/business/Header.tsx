import React, {useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import logo from '@/statics/images/logo.svg';
import '@/statics/sass/App.scss';
import styles from '@/statics/sass/home.module.scss';
import NavBar from '@/components/business/Navbar';
import Modal from '../base/Modal';
import UserApi from '@/apis/user';
import { useDispatch } from 'react-redux';
import Message from '@/utils/message';

const inviteBtnStyle = {
  height: 44+'px',
  lineHeight: 44+ 'px',
  width: 320+ 'px',
  borderRadius: 22 + 'px'
}

export default function Header () {
  const history = useHistory();
  const [inviteCode, setInviteCode] = useState('');
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  function verifyInviteCode() {
    UserApi.verifyInviteCode(inviteCode).then(res => {
      if(res && res.success) {
        setVisible(false);
        dispatch({type: 'SET_INVITECODE', inviteCode: inviteCode});
        history.push('/editor');
      } else {
        Message.error(res.errMessage);
      }
    });
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
        <button className="base-button default-button mr-8" onClick={() => setVisible(true)}>写文章</button>
        <button className="base-button text-button mr-8">登录</button>
      </div>
      </div>
      <Modal title="请输入邀请码" visible={visible}
        showClose={false}
        close={() => setVisible(false)}
        beforeClose={() => setInviteCode('')}
        concealFooter={true}>
        <div className="row" style={{ textAlign: 'center', marginTop: 8 + 'px' }}>
          <input className="base-input =" style={inviteBtnStyle} value={inviteCode} onChange={(e) => setInviteCode(e.target.value) } />
          <button className="base-button primary-button mt-24" style={inviteBtnStyle} onClick={verifyInviteCode}>确认</button>
        </div>
      </Modal>
    </div>
  );
}