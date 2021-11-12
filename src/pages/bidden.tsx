import React from 'react';
import bidden from '@/statics/images/bidden.svg';

export default function Bidden() {
  return (
    <div className="bidden">
      <img src={bidden} alt="you don't have permission access to this page" />
      <p className="prompt-text">你没有权限访问此页面，请联系管理员</p>
    </div>
  )
};
