import React from 'react';
import Radio from './Radio';
import styles from '@/statics/sass/form.module.scss';

export default function RadioGroup(props: any) {
  return (
    <div className={styles['form-item-group']}>
      <span className={styles.labelText+' pr-16'}
        style={props.labelWidth ? {width: props.labelWidth + 'px'}: {}}>
        { props.labelText }
      </span>
      {props.radioGroup.map((item: {value: string | number, label: string}, index: number) => {
        return (<Radio key={index} value={props.value == item.value}
          option={item.value}
          field={props.field}
          labelText={item.label}
          onChange={(model: FormModel) => {props.onChange({value: item.value, field: props.field})}} />);
      })
    }
  </div>
  )
}
