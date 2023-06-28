/*
 * @Author: Amelia
 * @email: zhangshan1@able-elec.com
 * @Date: 2022-11-18 18:10:05
 */
import React, { useEffect } from 'react';
import {createRoot} from '@/utils/index';
import Portal from './Portal';
import Icon from './Icon';
import styles from '@/statics/sass/modal.module.scss';

export default function Message(props: { message: string; visible: boolean, type: string }) {
  useEffect(() => {
    createRoot('message-root');
  }, []);

  if(!props.visible) return null;
  return (
    <Portal className={styles['message-box']} rootId="message-root" visible={props.visible}>
      <p className="message"><Icon name={props.type || 'info'} fillColor="#909399"/>{props.message}</p>
    </Portal>
  );
}
