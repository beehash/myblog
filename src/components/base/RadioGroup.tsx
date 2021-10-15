import React from 'react';
import Radio from './Radio';
import styles from '@/statics/sass/component.module.scss';

export default function RadioGroup({className = '', ...props}: any) {
  return (
    <div className={styles['form-item-group'] + ' boxflex ' + className}>
      <span className={styles.labelText+' pr-16 mt-4'}
        style={props.labelWidth ? {width: props.labelWidth + 'px'}: {}}>
        { props.labelText }
      </span>
      <span className={styles.itemGroup + ' inline-block flex-value'}>
        {
          props.radioGroup.map((item: {value: string | number, label: string}, index: number) => {
            return (<Radio key={index} value={props.value === (item as Obj)[props.valueKey]}
              option={(item as Obj)[props.valueKey || 'value']}
              field={props.field}
              labelText={(item as Obj)[props.labelKey || 'label']}
              onChange={(model: FormModel) => {props.onChange({value: (item as Obj)[props.valueKey], field: props.field})}} />);
          })
        }
    </span>
  </div>
  )
}
