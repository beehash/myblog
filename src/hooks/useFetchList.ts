import {useEffect, useState} from 'react';
import Message from '@/utils/message';

export default function useFetchList<T, R>(fetchFn: FetchFunctionList<T>, params: R, opts: Partial<FetchOpts>={}) {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState<T[]>([]);
  const [total, setTotal] = useState<Pagenation>();
  const {deps=[], msg, usedep} = opts;
  useEffect(() => {
    if(usedep){
      fetchDataList();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  function fetchDataList() {
    setLoading(true);
    fetchFn(params).then((res) => {
      if(res.success) {
        res.data.list && setList(res.data.list);
        res.data.total && setTotal(res.data.total);
        if(typeof msg === 'string') {
          Message.success(msg);
        } else {
          msg && Message.success(res.message);
        }  
      } else {
        Message.error(res.message);
      }
    }).finally(() => setLoading(false));
  }

  return {
    loading,
    list,
    total,
  }
}