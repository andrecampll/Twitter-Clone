import React from 'react';
import Header from './components/Header/Index';
import Banner from './components/Banner/Index';
import Bar from './components/Bar/Index';
import AsideProfile from './components/AsideProfile/Index';
import WidgetFollowers from './components/WidgetFollowers/Index';
import WidgetImages from './components/WidgetImages/Index';
import Timeline from './components/Timeline/Index';
import Tweet from './components/Tweet/Index';
import Widgets from './components/Widgets/Index';


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
          <WidgetImages />
        </AsideProfile>

        <Timeline>
          <Tweet />
        </Timeline>

        <Widgets />
      </div>
    </>
  );
}

export default App;
