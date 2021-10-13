import React, {useState} from 'react';
import styles from '@/statics/sass/component.module.scss';

export default function Input(props: any) {
  const [, setValue] = useState('');
  function handleChange (value: any) {  
    props.onChange({field: props.field, value});
    setValue(value);
  }

  return (
    <div className={styles['form-item']}>
      {props.required && <span className={styles.required}>*</span>}
      <label className={styles['form-label']}>
        <span className={styles.labelText+' pr-16'}
          style={{width: props.labelWidth + 'px'}}>
          {props.labelText}
        </span>
        <input value={props.value} className={styles['form-control']}
          onChange={(e) => handleChange(e.target.value)} />
      </label>
    </div>
  )
}
