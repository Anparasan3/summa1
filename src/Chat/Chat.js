import React from 'react';
import './Chat.css';
import MessageIcon from './MessageIcon.png';


export default function Chat(){
    function Message(){
        var chatCont = document.getElementById("chatContent");
        if (chatCont.style.display === "block") {
            chatCont.style.display = "none";
        } else {
            chatCont.style.display = "block";
        }
    }

    return (
        <div className="Chat-Container">
            <div className="chatIcon" onClick={() => Message()}> 
                <img src={MessageIcon} alt="MessageIcon" className="MessageIcon" />
            </div>
        </div>
    );
}




// <i class="far fa-comment-alt" />