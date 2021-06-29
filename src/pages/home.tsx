import React from 'react';
import Banner from '@/components/business/Banner';
import Navbar from '@/components/business/Navbar';
import EssayList from '@/components/business/EssayList';

export default function Home() {
  return (
    <div className="home">
      {/* banner */}
      <Banner/>
      {/* navBar */}
      <Navbar/>
      {/* content */}
      <div className="content center-block essay-content">
        <EssayList/>
      </div>
    </div>
  )
}
