import {useEffect, useState} from 'react';
import Message from '@/utils/message';

export default function useFetchMsg<T>(fetchApi: FetchFunction<T>, params: T, opts: Partial<FetchOpts> = {}) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const {deps=[], msg, usedep} = opts;
  useEffect(() => {
    if(usedep) {
      fetchFn();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  function fetchFn() {
    setLoading(true);
    fetchApi(params).then((res) => {
      if(res.success) {
        if(typeof msg === 'string') {
          Message.success(msg);
        } else {
          msg && Message.success(res.message);
        }  
        setData(res.data);
      } else {
        Message.error(res.message);
      }
    }).finally(() => setLoading(false));
  }

  return {
    loading,
    data,
    fetchFn,
  }
}