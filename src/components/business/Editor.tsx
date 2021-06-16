import React from 'react';
import styles from '@/statics/sass/editor.module.scss';
const toolBar: {id: number, component: () => JSX.Element}[] = [{
  id: 1,
  component: () => (
    <svg width="16" height="16" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M3 1v13.33M12.997 1v13.33M3 7.665h9.998"
      stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round">
      </path>
    </svg>
  )
}, {
  id: 2,
  component: () => (
    <svg width="1em" height="1em" viewBox="0 0 48 48" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M24 24c5.506 0 9.969-4.477 9.969-10S29.506 4 24 4H11v20h13zM28.031 44C33.537 44 38 39.523 38 34s-4.463-10-9.969-10H11v20h17.031z"
        clipRule="evenodd" stroke="currentColor" strokeWidth="4"
        strokeLinecap="round" strokeLinejoin="round">
      </path>
    </svg>
  )
}]

export default function Editor(props: any) {
  function generateToolBar() {
    return toolBar.map(item => {
      return (<li key={item.id}>
        {item.component()}
      </li>)
    });
  }

  return (
    <div className={styles.editor}>
      {/* tooBar */}
      <div className={styles.toolBar}>
        <ul>
          {generateToolBar()}
        </ul>
      </div>

      {/* 文本输入框 */}
      <textarea value={props.textc} className={styles.textArea+' pr-8'} onChange={props['editor-change']}/>
      
      {/* editor内容 */}
      <div className={styles['editor-content']}>
        <div className={styles['editor']}></div>
      </div>
    </div>
  );
}