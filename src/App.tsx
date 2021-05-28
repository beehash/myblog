import React from 'react';
import '@/statics/sass/App.scss';
import Header from './components/business/Header';
import Banner from './components/business/Banner';

function App() {
  return (
    <div className="App full_gradient js-full-gradient state-full state-complete">
      {/* header */}
      <Header/>
      {/* banner */}
      <Banner/>
      {/* Content */}
      <div className="inner-box">
          <div className="content theme-bg">
          </div>
        </div>
    </div>
  );
}

export default App;
