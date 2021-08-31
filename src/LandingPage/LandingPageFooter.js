import React from 'react';
import './Style/LandingPageFooter.css';
import TwitterIcon from './Sources/TwitterIcon.png';
import FacebookIcon from './Sources/FacebookIcon.png';
import LinkedinIcon from './Sources/LinkedinIcon.png';
import SkypeIcon from './Sources/SkypeIcon.png';

export default class LandingPageFooter extends React.Component{
    render(){
        return(
            <div className="LandingPageFooter">
                <div className="LandingPageFooterLeft">
                    <div className="FooterLeftName">
                        AGORA
                    </div>
                    <br/>
                    <div className="FooterLeftAddress">
                        #No.of address location,<br/>
                        Street, Landmark,<br/>
                        City, State, Country,<br/>
                        Pincode
                    </div>
                    <br/>
                    <div className="FooterLeftCopyRights">
                        C 2014 - 2021 privacy policy
                    </div>
                </div>
                <div className="LandingPageFooterMiddle">
                    <a href="#AboutUs" className="FooterMiddleHref">ABOUT US</a><br/>
                    <a href="#Products" className="FooterMiddleHref">Products</a><br/>
                    <a href="#Categories" className="FooterMiddleHref">Categories</a><br/>
                    <a href="#Stores" className="FooterMiddleHref">Stores</a><br/>
                    <a href="#ContactUs" className="FooterMiddleHref">Contact Us</a>
                </div>
                <div className="LandingPageFooterRight">
                    <img src={TwitterIcon} className="FooterRightIcon" alt="TwitterIcon"/>
                    <img src={FacebookIcon} className="FooterRightIcon" alt="FacebookIcon"/>
                    <img src={LinkedinIcon} className="FooterRightIcon" alt="LinkedinIcon"/>
                    <img src={SkypeIcon} className="FooterRightIcon" alt="SkypeIcon"/>
                </div>
            </div>
        )
    }
}