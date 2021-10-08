import {useState, useEffect} from 'react'
import ReactDOM from 'react-dom';

export default function Portal({visible, children, className, rootId}: any) {
  const [target, setTarget] = useState<HTMLElement | null>();
  

  useEffect(() => {
    const container = createElement(rootId);
    (container as HTMLElement).className=className as string;
    if(visible) {
      (container as HTMLElement).style.display='block';
    } else {
      (container as HTMLElement).style.display='none';
    }

    setTarget(container);

    return () => {
      (container as HTMLElement).className='';
      setTarget(null);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  function createElement(rootname: string) {
    const el = document.createElement('div');
    el.id = rootname;
    el.style.display = 'none';
    let root = document.getElementById(rootname);
    if(!root){
      root = document.body.appendChild(el);
    }
    return root;
  }

  return target ? ReactDOM.createPortal(
    children,
    target
  ): (<div></div>);

}
