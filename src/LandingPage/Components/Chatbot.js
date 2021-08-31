import React from 'react';
import ChatbotIcon from '../Sources/MessageIcon.png';
//import '../Style/LandingPage.css'
import '../Style/ChatBot.css'

export default function Chatbot(){

    function ShowChat(){
        console.log("ShowChat");
        var chat = document.getElementById("Chat");
        if (chat.style.display === "none") {
            chat.style.display = "block";
        } else {
            chat.style.display = "none";
        }
    }

    return(
        <div className="Chatbot">
            <img src={ChatbotIcon} className="ChatbotIcon" onClick={() => ShowChat()} alt="ChatBotIcon"/>
            <div className="Chat" id="Chat">Hey Hi! How can I help you?</div>
        </div>
    )
}