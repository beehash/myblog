import React, { BaseSyntheticEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from '@/statics/sass/form.module.scss';
import Icon from '@/components/base/Icon';

export default function Checkbox(props: any) {
  const [, setValue] = useState(false);
  const theme = useSelector((state: any) => {
    return state.theme;
  });

  function handleChange(e: BaseSyntheticEvent) {
    props.onChange({value: e.target.checked, field: props.field});
    setValue(e.target.value);
  }

  return (
    <div className={styles['form-item']+ ' ' + styles['checkbox']}>
    {props.required && <span className={styles.required}>*</span>}
    <label className={styles['form-label']}>
      <span className={styles.labelText+' pr-16'}
        style={{width: props.labelWidth + 'px'}}>
        { props.labelText }
      </span>
      <span className={styles.checkbox}
        style={props.value ? {backgroundColor: theme.color, borderColor: theme.color}: {}}>
        {props.value && <Icon name="checked" color="#ffffff"
          className={props.value ? styles.checked : ''} />}
      </span>
      <input type="checkbox" className={styles['original-checkbox']}
        value={props.value} onChange={handleChange} />
    </label>
  </div>
  )
}
