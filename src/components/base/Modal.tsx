import React, {useRef, useEffect} from 'react';
import Portal from './Portal';
import { createRoot } from '@/utils/index';
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
  console.log(props.children);
  useEffect(() => {
    if(props.visible) {
      createRoot('modal-root');
    }
  }, [props.visible]);

  // if(!props.visible) return null;
  return props.visible ? (
    <Portal rootId="modal-root" className={styles['modal-mask']} visible={props.visible}>
      <div className={styles['modal-box']} ref={modal}
        style={{width: props.width, height: props.height}}>
        {/* 头部 */}
        <div className={styles.header}>
          <p className={styles.title}>{props.title}</p>
          <span className="close" onClick={() => props.close()}>
            <Icon name="close" color="#343434"/>
          </span>
        </div>
        {/* 主体 */}
        <div className={styles.body}>
          <slot>{props.children}</slot>
        </div>
        {/* 底部 */}
        {!props.concealFooter && <div className={styles.footer + ' text-center'}>
          <button className="base-button primary-button mr-16" onClick={props.onConfirm}>确定</button>
          {!props.cancelable && <button className="base-button default-button" onClick={() => props.close()}>取消</button>}
        </div>}
        <slot name="footer">1q1qew</slot>
      </div>
    </Portal>
  ) : (<div></div>);
}

Modal.defaultProps = defaultOptions;
