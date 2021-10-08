import React from 'react';
// import Banner from '@/components/business/Banner';
import EssayList from '@/components/business/EssayList';

export default function Home() {
  return (
    <div className="home center-block">
      {/* banner */}
      {/* <Banner/> */}
      {/* navBar */}
      {/* <Navbar/> */}
      {/* content */}
      <div className="content center-block essay-content">
        <EssayList/>
      </div>
    </div>
  )
}
