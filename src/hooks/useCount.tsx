import { useState, useEffect, useCallback } from "react";


function useCount() {
  const [count, setCount] = useState(0);
  const intervalfn = useCallback(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return interval;
  }, [count]);
  // dfd
  useEffect(() => {
    const interval = intervalfn();
    // const interval = setInterval(() => {
    //   setCount(t => t+1);
    // }, 1000);
    return () => clearInterval(interval);
  }, [intervalfn]);

  
  return count;
}

export default useCount;