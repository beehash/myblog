import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import Message from '@/utils/message';

export default function useFetchList<T, R>(fetchFn: FetchFunctionList<T>, params: R, opts: Partial<FetchOpts>={}) {
  const [status, setStatus] = useState<FetchStatus>('before');
  const [list, setList] = useState<T[]>([]);
  const [total, setTotal] = useState<Pagenation>();
  const dispatch = useDispatch();
  const {deps=[], msg, usedep, useloading=false} = opts;
  
  useEffect(() => {
    if(usedep){
      fetchDataList();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  useEffect(() => {
    if(useloading) {
      if(status === 'pending') {
        dispatch({type: 'SETLOADING', loading: true});
      } else {
        dispatch({type: 'SETLOADING', loading: false});
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, dispatch]);

  function fetchDataList() {
    setStatus('pending');
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
    }).finally(() => setStatus('completed'));
  }

  return {
    list,
    total,
    status,
  }
}