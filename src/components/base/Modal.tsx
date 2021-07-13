import React, {useRef, useEffect} from 'react';
import Portal from './Portal';
import Icon from '@/components/base/Icon';
import styles from '@/statics/sass/modal.module.scss';

const defaultOptions = {
  visible: false,
  title: '文章标题',
  children: '文章内容',
  concealFooter: false,
  cancelable: false,
  width: '480px',
  height: 'auto',
};

export default function Modal(props: any=defaultOptions) {
  const modal = useRef(null);

  useEffect(() => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if(!props.visible) return null;
  return (
    <Portal className={styles['modal-mask']} visible={props.visible}>
      <div className={styles['modal-box']} ref={modal} style={{width: props.width, height: props.height}}>
        {/* 头部 */}
        <div className={styles.header}>
          <p className={styles.title}>{props.title}</p>
          <span className="close" onClick={() => props.close()}>
            <Icon name="close" color="#343434"/>
          </span>
        </div>
        {/* 主体 */}
        <div className={styles.body}>
          {props.children}
        </div>
        {/* 底部 */}
        {!props.concealFooter && <div className={styles.footer + ' text-center'}>
          <button className="base-button primary-button mr-16" onClick={props.onConfirm}>确定</button>
          {!props.cancelable && <button className="base-button default-button" onClick={() => props.close()}>取消</button>}
        </div>}
      </div>
    </Portal>
  );
}
Modal.defaultProps = defaultOptions;
