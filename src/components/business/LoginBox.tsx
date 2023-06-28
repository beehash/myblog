/*
 * @Author: Amelia
 * @email: zhangshan1@able-elec.com
 * @Date: 2023-05-31 16:56:34
 */
/*
 * @Author: Amelia
 * @email: zhangshan1@able-elec.com
 * @Date: 2023-05-31 16:56:34
 */
import React, { FormEvent, useState } from 'react';
import {aesDecode, aesEncode} from '@/utils/index';
import Modal from '../base/Modal';
import Input from '../base/Input';
import {useForm} from '@/hooks/model';
import api from '@/apis/user';
import Message from '@/utils/message';

const loginBtnStyle = {
  height: 44+'px',
  lineHeight: 44+ 'px',
  width: 320+ 'px',
  borderRadius: 22 + 'px'
}

export default function LoginBox(props: any) {
  const {form, updateForm} = useForm({
    username: '',
    pwd: '',
  });
  // const [form] = useModel(form);
  function handleClose () {
    updateForm({
      username: '',
      pwd: '',
    });
  }
  function loginAction() {
    api.loginUser(form).then(res => {
      console.log('loginUser', res);
      if(res && res.success) {
        Message.success('登录成功！');
        handleClose();
      }
    });
  }
  function handleOnChange({value, field}: FormModel) {
    updateForm(value, field);
  }
  return (
    <Modal className="login-box" title="登录" visible={props.visible}
      showClose={false}
      close={props.close}
      beforeClose={handleClose}
      concealFooter={true}>
      <div className="row" style={{ textAlign: 'center', marginTop: 8 + 'px' }}>
        <form>
          <Input className="login-input" value={form.username} field="username" labelText="用户名" onChange={handleOnChange} />
          <Input password={true} style={{marginTop: 16+'px'}} className="login-input" value={form.pwd} field="pwd" labelText="密码" onChange={handleOnChange}/>
        </form>
        <button className="base-button primary-button mt-24" style={loginBtnStyle} onClick={loginAction}>登录</button>
      </div>
    </Modal>
  );
}
