import React, { useEffect, useRef, useState } from 'react';
const Block = () => {
  const blockref = useRef<any>(null);
  useEffect(() => {
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const handleClick = (event: any) => {
    if (!(event.target && blockref.current.contains(event.target))) {
      alert('click outside')
    }
  }

  return (
    <div style={{ padding: '50px' }} ref={blockref} >
      <div className="child"></div>
    </div>
  )
}

const CountDown = () => {
  const [count, setCount] = useState(30);
  useEffect(() => {
    const interval = setInterval(() => {
      if (count === 0) setCount(30);
      else setCount((c: number) => c - 1);
    }, 1000);
    return () => clearInterval(interval);
  });

  return <button>{count}</button>
}

export { Block, CountDown };