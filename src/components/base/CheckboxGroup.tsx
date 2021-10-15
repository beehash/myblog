import React from 'react';
import Checkbox from './Checkbox';
import styles from '@/statics/sass/component.module.scss';

export default function CheckboxGroup({className = '',...props}: any) {
  function handleChange(model: FormModel, item: {value: string | number, label: string}) {
    let value = model.value;
    const values = props.value;
    if(model.value) {
      value = props.value.concat([(item as Obj)[props.valueKey]]);
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
    <div className={styles['form-item-group'] + ' boxflex ' + className}>
      <span className={styles.labelText+' pr-16 mt-4'}
        style={props.labelWidth ? {width: props.labelWidth + 'px'}: {}}>
        { props.labelText }
      </span>
      <span className={styles.itemGroup + ' inline-block flex-value'}>
      {
        props.checkboxGroup.map((item: {value: string | number, label: string}, index: number) => {
          return (<Checkbox key={index} value={!!(props.value.find((v: any) => {
            return v === (item as Obj)[props.valueKey]}))}
            option={(item as Obj)[props.valueKey]}
            field={props.field}
            labelText={(item as Obj)[props.labelKey]}
            onChange={(model: FormModel) => handleChange(model, item)} />);
        })
      }
    </span>
  </div>
  )
}
