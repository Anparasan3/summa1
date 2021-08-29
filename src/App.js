import React, { useEffect } from 'react';
import LandingPage from './LandingPage/LandingPage'

import ReactGA from 'react-ga';
const TRACKING_ID = "UA-206074598-1";
ReactGA.initialize(TRACKING_ID);
ReactGA.pageview(window.location.pathname + window.location.search);

export default function App() {

  const GoogleAnalyticsEvent = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const utm_source = queryParams.get('utm_source');
    const utm_content = queryParams.get('utm_content');
    console.log("utm_source : ",utm_source,"\nutm_content : ", utm_content);
    if(utm_content && utm_source){
      ReactGA.event({
        category: utm_source,
        action: utm_content,
      });
    }
  }

  useEffect(() => {
    GoogleAnalyticsEvent();
  },[]);

  return (
    <div>
      <LandingPage/>
    </div>
  );
}

// To check dynamic URL
//https://nanducreation.blogspot.com/2021/08/agora-ui-dynamic-url.html