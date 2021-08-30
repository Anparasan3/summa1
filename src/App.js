import React, { useEffect } from 'react';
import LandingPage from './LandingPage/LandingPage'

import ReactGA from 'react-ga';
const TRACKING_ID = "UA-206074598-1";
ReactGA.initialize(TRACKING_ID);
ReactGA.pageview(window.location.pathname);

export default function App() {

  const GoogleAnalyticsEvent = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const merchant = queryParams.get('merchant');
    const utm_source = queryParams.get('utm_source');
    const utm_campaign = queryParams.get('utm_campaign');
    console.log("merchant : ",merchant, "\nutm_source : ",utm_source, "\nutm_campaign : ",utm_campaign);
    if(utm_campaign && utm_source){
      ReactGA.event({
        category: utm_source,
        action: utm_campaign,
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