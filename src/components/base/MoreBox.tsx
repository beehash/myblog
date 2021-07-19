import React from 'react';
import {Link} from 'react-router-dom';

export default function MoreBox(props: any) {
  return (
    <div className="more-box">
      <div className="text-previwer">
        {props.children}
        <Link className="btn" to={'/articles/'+ props.id+'/detail'}>更多</Link>
      </div>
    </div>
  )
}
