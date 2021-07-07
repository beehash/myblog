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
    props.setVisible(props.visible);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.visible]);

  return props.visible ? (
    <Portal className={styles['modal-mask']}>
      <div className={styles['modal-box']} ref={modal} style={{width: props.width, height: props.height}}>
        {/* 头部 */}
        <div className="header">
          <p className={styles.title}>{props.title}</p>
          <span className="close" onClick={() => props.setVisible(false)}>
            <Icon name="close" color="#343434"/>
          </span>
        </div>
        {/* 主体 */}
        <div className={styles.body}>
          {props.children}
        </div>
        {/* 底部 */}
        {!props.concealFooter && <div className="footer">
          <button className="base-button primary-button">确定</button>
          {!props.cancelable && <button className="base-button default-button">取消</button>}
        </div>}
      </div>
    </Portal>
  ): null;
}
Modal.defaultProps = defaultOptions;
