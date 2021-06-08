import React from 'react'
import {Link} from 'react-router-dom';

export default function MoreBox(props: any) {
  return (
    <div className="more-box">
      <div className="text">
        {props.children}
        <Link className="btn" to={'/articles/'+ props.id+'/detail'}>更多</Link>
      </div>
    </div>
  )
}
