import React from 'react';
import Icon from './Icon';
import styles from '@/statics/sass/component.module.scss';

export default function Pagenation({pageSize, current, total, change, className}: any) {
  const size = Math.ceil(total / pageSize);

  function generateTemplate() {
    const listTemplate = [];
    for(let i = 0; i < size; i++){
      listTemplate.push(<span className={styles['page-btn'] + ' text-grey1 ' + (i + 1 === current ? 'base-button primary-button' : styles.link)}
        key={i} onClick={() => change('page', i+1)}>
        {i+1}</span>
      );
    }
    return listTemplate;
  }
  
  return (
    <div className={styles.pagenation + ' mt-16 ' + className}>
      {/* left button */}
      <span className={styles['page-btn'] + ' mx-4 ' + (current === 1 ? 'disabled' : '')}
        onClick={() => current !== 1 && change('next', current - 1)}>
        <Icon className={styles['left-btn']}
          name="left" color={current === 1 ? '#ececec' : '#666666'} width={20} height={20} />
      </span>
      {generateTemplate()}
      {/* right button */}
      <span className={styles['page-btn'] + ' mx-4 ' + (current === size ? 'disabled' : '')}
        onClick={() => current !== size && change('prev', current + 1)}>
        <Icon className={styles['right-btn']}
          name="left" color={current === size ? '#ececec' : '#666666'} width={20} height={20}/>
      </span>
    </div>
  );
}
