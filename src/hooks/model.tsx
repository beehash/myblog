import {useEffect, useState} from 'react';

export default function useModel(props: any) {
  const [value, setValue] = useState(props.value);
  useEffect(() => {
    setValue(value);
  }, [value]);

  return {value};
}
