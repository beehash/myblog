/*
 * @Author: Amelia
 * @email: zhangshan1@able-elec.com
 * @Date: 2022-11-18 18:10:05
 */
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
  showClose: true,
};

export default function Modal(props: any=defaultOptions) {
  const modal = useRef(null);

  useEffect(() => {
    if(props.visible) {
      createRoot('modal-root');
    }
  }, [props.visible]);

  function innerClose() {
    props.close ?
      props.beforeClose
        ? props.beforeClose() || props.close()
        : props.close()
      : 1;
  }

  return props.visible ? (
    <Portal rootId="modal-root" className={styles['modal-mask']} visible={props.visible}>
      <div className={styles['modal-box']+ (props.className ? ' '+props.className : '')} ref={modal}
        style={{width: props.width, height: props.height}}>
        {/* 头部 */}
        <div className={styles.header}>
          <p className={styles.title}>{props.title}</p>
          {!props.showClose && <span className={styles.close} onClick={innerClose}>
            <Icon name="close" fillColor="#343434" style={{width: 24+'px', height: 24+'px', verticalAlign: 'text-top'}}/>
          </span>
          }
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
        {/* <slot name="footer">1q1qew</slot> */}
      </div>
    </Portal>
  ) : (<div></div>);
}

Modal.defaultProps = defaultOptions;
