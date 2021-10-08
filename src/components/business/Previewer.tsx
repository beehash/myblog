import React from 'react';
import styles from '@/statics/sass/editor.module.scss';

export default function Previewer(props: any) {
  return (
    <div className={styles.previewer+' p-8'}>
      <div className={styles.toolBar}></div>
      <div className={styles['html-previewer']} dangerouslySetInnerHTML={{__html: props.htmlc}}></div>
    </div>
  );
}
