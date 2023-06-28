/*
 * @Author: Amelia
 * @email: zhangshan1@able-elec.com
 * @Date: 2022-07-04 13:06:44
 */
import React, { BaseSyntheticEvent } from 'react';
import { useSelector } from 'react-redux';
import styles from '@/statics/sass/component.module.scss';
import Icon from '@/components/base/Icon';

export default function Checkbox({className = '', ...props}: any) {
  const theme = useSelector((state: any) => {
    return state.theme;
  });

  function handleChange(e: BaseSyntheticEvent) {
    props.onChange({value: e.target.checked, field: props.field});
  }

  return (
    <div className={styles['form-item']+ ' '+ styles.labelauto+ ' '+ className}>
    {props.required && <span className={styles.required}>*</span>}
    <label className={styles['form-label']}>
      <span className={styles.labelText+' pr-4'}
        style={props.labelWidth? {width: props.labelWidth + 'px'}: {}}>
        { props.labelText }
      </span>
      <span className={styles.checkbox}
        style={props.value ? {backgroundColor: theme.color, borderColor: theme.color}: {}}>
        {props.value && <Icon name="checked" fillColor="#ffffff"
          className={props.value ? styles.checked : ''} />}
      </span>
      <input type="checkbox" className={styles['original']}
        checked={props.value} onChange={handleChange} />
    </label>
    </div>
  );
}
