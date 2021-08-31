import React from 'react';
import './Style/LandingPage.css';
import LandingPageHeader from './LandingPageHeader';
import LandingPageBody from './LandingPageBody';
import LandingPageFooter from './LandingPageFooter';
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