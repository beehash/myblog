import React, { BaseSyntheticEvent, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from '@/statics/sass/form.module.scss';

export default function Radio(props: any) {
  const theme = useSelector((state: any) => {
    return state.theme;
  });

  function handleChange(e: BaseSyntheticEvent) {
    console.log('radio', e.target.checked);
    props.onChange({value: e.target.checked, field: props.field});
  }

  return (
    <div className={styles['form-item']+ ' '+ styles.labelauto}>
      {props.required && <span className={styles.required}>*</span>}
      <label className={styles['form-label']}>
        <span className={styles.labelText+' pr-4'}
          style={props.labelWidth ? {width: props.labelWidth + 'px'}: {}}>
          { props.labelText }
        </span>
        <span className={styles.radio}
          style={props.value ? {borderColor: theme.color}: {}}>
          {props.value && <span className={styles.checked}
            style={props.value ? {backgroundColor: theme.color}: {}} />}
        </span>
        <input type="radio" name={props.field} className={styles['original']}
          checked={props.value} onChange={handleChange} onClick={() => {console.log(333333)}}/>
      </label>
    </div>
  )
}