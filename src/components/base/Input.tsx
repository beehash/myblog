/*
 * @Author: Amelia
 * @email: zhangshan1@able-elec.com
 * @Date: 2022-07-04 13:06:44
 */
import React, {useState} from 'react';
import styles from '@/statics/sass/component.module.scss';

export default function Input({className = '', style = {}, ...props}: any) {
  function handleChange (value2: any) {
    props.onChange({value: value2, field: props.field});
  }

  return (
    <div className={styles['form-item'] + ' ' + className} style={style}>
      {props.required && <span className={styles.required}>*</span>}
      <label className={styles['form-label']}>
        <span className={styles.labelText+' pr-16'}
          style={{width: props.labelWidth + 'px'}}>
          {props.labelText}
        </span>
        <input type={props.password ? 'password' : 'text'} value={props.value} className={styles['form-control']}
          onChange={(e) => handleChange(e.target.value)} />
      </label>
    </div>
  )
}
