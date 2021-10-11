import React, {useState, useEffect, useRef} from 'react';
import girl from '@/statics/images/girl.svg';
import SideBar from './SideBar';
import DragUtil from '@/utils/drag';

export default function GirlNav() {
  const [navShow, setnavShow] = useState(false);
  const girlRef = useRef(null);

  useEffect(() => {
    new DragUtil(girlRef.current as unknown as HTMLElement);
  }, []);
  return (
    <div className="girl-nav">
      <div className="girl" ref={girlRef}>
        <img src={girl} alt="girl" onClick={(e) => setnavShow(!navShow)} />
      </div>
      {/* <Transition visible={navShow} transName="transrtl"> */}
      <SideBar visible={navShow}/>
      {/* </Transition> */}
    </div>
  )
}
