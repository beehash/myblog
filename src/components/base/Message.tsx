import React, { useEffect } from 'react';
import {createRoot} from '@/utils/index';
import Portal from './Portal';
import Icon from './Icon';
import styles from '@/statics/sass/modal.module.scss';

export default function Message(props: {message: string; visible: boolean}) {
  useEffect(() => {
    createRoot('message-root');
  }, []);

  if(!props.visible) return null;
  return (
    <Portal className={styles['message-box']} rootId="message-root" visible={props.visible}>
      <p className="message"><Icon name="info" color="#909399"/>{props.message}</p>
    </Portal>
  );
}
