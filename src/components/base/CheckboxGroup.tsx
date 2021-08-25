import React from 'react';
import Checkbox from './Checkbox';
import styles from '@/statics/sass/form.module.scss';

export default function CheckboxGroup(props: any) {

  function handleChange(model: FormModel, item: {value: string | number, label: string}) {
    let value = model.value;
    const values = props.value;
    if(model.value) {
      value = props.value.concat([item.value]);
    } else {
      const index = props.value.findIndex((v: any) => v === item.value);
      if(index === 0 || index) {
        values.splice(index, 1);
        value = values;
      }
    }
    props.onChange({value, field: props.field});
  }

  return (
    <div className={styles['form-item-group']}>
      <span className={styles.labelText+' pr-16'}
        style={props.labelWidth ? {width: props.labelWidth + 'px'}: {}}>
        { props.labelText }
      </span>
      {props.checkboxGroup.map((item: {value: string | number, label: string}, index: number) => {
        return (<Checkbox key={index} value={!!(props.value.find((v: any) => v === item.value))}
          option={item.value}
          field={props.field}
          labelText={item.label}
          onChange={(model: FormModel) => handleChange(model, item)} />);
      })
    }
  </div>
  )
}
