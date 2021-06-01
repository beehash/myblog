import React from 'react'

export default function FoldBox(props: any) {
  return (
    <div className="fold-box">
      <input type="checkbox" className="exp" id="exp" />
      <div className="text">
        <label className="btn" htmlFor="exp"></label>
        {props.children}
      </div>
    </div>
  )
}
