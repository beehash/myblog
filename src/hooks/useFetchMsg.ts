import {useEffect, useState} from 'react';
import Message from '@/utils/message';

export default function useFetchMsg<T>(fetchFn: FetchFunction<T>, params: T, msg: string) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetchFn(params).then((res) => {
      if(res.success) {
        if(typeof msg === 'string') {
          Message.success(msg);
        } else {
          msg && Message.success(res.message);
        }  
      } else {
        Message.error(res.message);
      }
    }).finally(() => setLoading(false));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[fetchFn, params]);

  return {
    loading
  }
}