import React, {useEffect} from 'react';

export default function Transition({visible, transName, ...other}: any) {
  useEffect(() => {
    
  }, [visible]);

  return (
    <div className={transName + (visible ? ' fade-out' : ' fade-in')}>
      {other.children}
    </div>
  );
}
