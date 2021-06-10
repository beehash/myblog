import React from 'react';
import styles from '@/statics/sass/editor.module.scss';

export default function Previewer(props: any) {
  return (
    <div className={styles.previewer+' w-full pl-8'}>
      <div className={styles.toolBar}></div>
      <div dangerouslySetInnerHTML={{__html: props.htmlc}}></div>
    </div>
  );
}
