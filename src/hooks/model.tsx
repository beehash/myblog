/*
 * @Author: Amelia
 * @email: zhangshan1@able-elec.com
 * @Date: 2022-07-04 13:06:44
 */
import { off } from 'process';
import {useEffect, useState} from 'react';

export default function useModel(value2: any) {
  const [value, setValue] = useState(value2);

  return {
    value,
    updateModel: setValue,
    valueOf() {
      return value;
    },
  };
}

export function useForm(form2: any) {
  const [form, setForm] = useState(form2);
  function updateForm(value: any, key?: string) {
    if(key) {
      setForm({...form, [key]: value});
    } else {
      setForm(value);
    }
  }
  return {
    form,
    updateForm,
    valueOf() {
      return form;
    }
  }
}