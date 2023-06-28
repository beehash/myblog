import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Portal from './Portal';
import Icon from './Icon';
import styles from '@/statics/sass/modal.module.scss';

export default function Loading(props: any) {
  const theme = useSelector((state: any) => {
    return state.theme;
  });
  const loading = useSelector((state: any) => {
    return state.root.loading;
  });
  
  useEffect(() => {

  }, [theme, loading]);

  return (
    <Portal className={styles['loading-mask']}
      rootId="loading-root"
      visible={loading}>
      <div className={styles['loading-box']}>
        <Icon name="loading" className={styles['loading']} fillColor="#78ecff4c"/>
      </div>
    </Portal>
  );
}