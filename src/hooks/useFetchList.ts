import {useEffect, useState} from 'react';
import Message from '@/utils/message';

export default function useFetchList<T, R>(fetchFn: FetchFunctionList<T>, params: R, deps = []) {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState<T[]>([]);
  const [total, setTotal] = useState<Pagenation>();
  useEffect(() => {
    fetchDataList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  function fetchDataList() {
    setLoading(true);
    fetchFn(params).then((res) => {
      if(res.success) {
        setList(res.data.list);
        console.log(res.data)
        res.data.total && setTotal(res.data.total);
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