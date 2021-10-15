import React from 'react';
import styles from '@/statics/sass/component.module.scss';

export default function TextArea({className = '',...props}: any) {
  function handleChange (value: any) {
    props.onChange({field: props.field, value});
  }

  return (
    <div className={styles['form-item'] + ' clearfix ' + className}>
      {props.required && <span className={styles.required}>*</span>}
      <label className={styles['form-label']+ ' ' + styles['form-label-area']}>
        <span style={{width: props.labelWidth + 'px'}}
          className={styles.labelText}>{props.labelText}
        </span>
        <textarea maxLength={props.maxLength} value={props.value}
          className={styles['form-control']}
          onChange={(e) => handleChange(e.target.value)}
          style={{width: props.width}}/>
      </label>
      {props.maxLength && <span className={styles.prompt}>({props.value.length}/{props.maxLength})</span>}
    </div>
  );
}
