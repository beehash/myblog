import React, { BaseSyntheticEvent } from 'react';
import styles from '@/statics/sass/form.module.scss';

export default function Checkbox(props: any) {
  function handleChange(e: BaseSyntheticEvent) {
    props.onChange(e.target.checked);
  }

  return (
    <div className={styles['form-item']}>
    {props.required && <span className={styles.required}>*</span>}
    <label className={styles['form-label']}>
      <span className={styles.labelText+' pr-16'}
        style={{width: props.labelWidth + 'px'}}>
        {props.labelText}
      </span>
      <input type="checkbox" value={props.value} onChange={handleChange} />
    </label>
  </div>
  )
}
