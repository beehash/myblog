import React from 'react';
// import Banner from '@/components/business/Banner';
import EssayList from '@/components/business/EssayList';
import Icon from '@/components/base/Icon';

export default function Home() {
  return (
    <div className="home">
      {/* banner */}
      {/* <Banner/> */}
      {/* navBar */}
      {/* <Navbar/> */}
      {/* content */}
      <div className="content essay-content pos-relative">
        <h3 className="px-8 py-32">首页推荐 <Icon name="heart" color="#FB3640"/></h3>
        <div className="homebg-pic"></div>
        <EssayList/>
      </div>
    </div>
  )
}
