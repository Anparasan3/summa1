import React from 'react';
import './Style/LandingPage.css';
import LandingPageHeader from './Components/LandingHeader';
import LandingPageBody from './Components/LandingPageBody';
import LandingPageFooter from './Components/LandingFooter';
import Chatbot from './Components/Chatbot';

export default class LandingPage extends React.Component{
    render(){
        return(
            <div className="LandingPageMain">
                <LandingPageHeader/>
                <LandingPageBody/>
                <LandingPageFooter/>
                <Chatbot/>
            </div>
        )
    }
}