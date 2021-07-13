import {useState, useEffect} from 'react'
import ReactDOM from 'react-dom';

export default function Portal({visible, children, className}: any) {
  const [target, setTarget] = useState<HTMLElement | null>();
  let container = document.getElementById('modal-root');

  useEffect(() => {
    (container as HTMLElement).className=className as string;

    setTarget(container);
    return () => {
      (container as HTMLElement).className='';
      setTarget(null);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return target ? ReactDOM.createPortal(
    children,
    target
  ): (<div></div>);
}
