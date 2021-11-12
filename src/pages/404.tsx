import React from 'react';
import notfound from '@/statics/images/404.svg';

export default function NotFound() {
  return (
    <div className="not-found">
      <img src={notfound} alt="there is not the visitable webpage you wanted" />
    </div>
  );
}
