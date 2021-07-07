import {useEffect} from 'react'
import ReactDOM from 'react-dom';

export default function Portal({children, className}: any) {
  const mask = document.createElement('div');
  mask.className=className;
  
  useEffect(() => {
    document.body.appendChild(mask);
    return () => {
      document.body.removeChild(mask);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return ReactDOM.createPortal(
    children,
    mask
  );
}
