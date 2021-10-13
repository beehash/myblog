import React, { useState } from 'react';
import Icon from './Icon';
import styles from '@/statics/sass/component.module.scss';

export default function Pagenation({pageSize, current, total, change}: any) {
  const size = Math.ceil(total / pageSize);
  const [,setCurrent] = useState(current);
  function generateTemplate() {
    const listTemplate = [];
    for(let i = 0; i < size; i++){
      listTemplate.push(<span className={styles['page-btn']} key={i} onClick={() => change('page', i+1)}>{i+1}</span>);
    }
    return listTemplate;
  }
  function next() {
    (current !== size) && setCurrent(current + 1);
    (current !== size) && change('next', current + 1);

  }
  function prev() {
    (current !== 1) && setCurrent(current - 1);
    (current !== 1) && change('prev', current - 1);
  }

  return (
    <div className={styles.pagenation + ' mt-16 '}>
      <span className={styles['page-btn'] + ' mx-4 ' + (current === 1 ? 'disabled' : '')}
        onClick={prev}>
        <Icon className={styles['left-btn']}
          name="left" color={current === 1 ? '#ececec' : '#666666'} width={20} height={20} />
      </span>
      {generateTemplate()}
      <span className={styles['page-btn'] + ' mx-4 ' + (current === size ? 'disabled' : '')}
        onClick={next}>
        <Icon className={styles['right-btn']}
          name="left" color={current === size ? '#ececec' : '#666666'} width={20} height={20}/>
      </span>
    </div>
  );
}
