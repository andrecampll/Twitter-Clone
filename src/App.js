import React from 'react';
import Header from './components/Header/Index';
import Banner from './components/Banner/Index';
import Bar from './components/Bar/Index';
import AsideProfile from './components/AsideProfile/Index';
import WidgetFollowers from './components/WidgetFollowers/Index';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Bar />
      <div className="wrapper content">
        <AsideProfile>
          <WidgetFollowers />
        </AsideProfile>
      </div>
    </>
  );
}

export default App;
