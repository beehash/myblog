import React, {useState} from 'react';
import Transition from '../base/transition';
import girl from '@/statics/images/girl.svg';
import SideBar from './SideBar';

export default function GirlNav() {
  const [navShow, setnavShow] = useState(false);
  return (
    <div className="girl-nav">
      <div className="girl">
        <img src={girl} alt="girl" onClick={() => setnavShow(!navShow)}/>
      </div>
      {/* <Transition visible={navShow} transName="transrtl"> */}
      <SideBar visible={navShow}/>
      {/* </Transition> */}
    </div>
  )
}
