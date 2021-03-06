import React from 'react';
import '@/statics/sass/App.scss';
import Header from '@/components/business/Header';
import Theme from '@/components/base/Theme';
import GirlNav from '@/components/business/GirlNav';

export default function Index({children}: any) {
  return (
    <div className="App">
      {/* Theme */}
      <Theme />
      {/* GirlNav */}
      <GirlNav />
      {/* header */}
      <Header />
      <div className="container center-block">
        {children}
      </div>
    </div>
  )
}
