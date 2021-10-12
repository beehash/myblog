import React, {useState, useEffect, useRef} from 'react';
import girl from '@/statics/images/girl.svg';
import SideBar from './SideBar';
import DragUtil from '@/utils/drag';

export default function GirlNav() {
  const [navShow, setnavShow] = useState(false);
  const drag = new DragUtil();
  const girlRef = useRef(null);

  useEffect(() => {
    drag.init(girlRef.current as unknown as HTMLElement);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  function girlClick() {
    if(drag.mousedownFired) {
      drag.closeMounsedownFire();
      return;
    }
    setnavShow(!navShow);
  }

  return (
    <div className="girl-nav">
      <div className="girl" ref={girlRef} onClick={girlClick} >
        <img src={girl} alt="girl" />
      </div>
      <SideBar visible={navShow} />
    </div>
  )
}
