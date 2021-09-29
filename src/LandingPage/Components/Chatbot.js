import React, { useEffect, useState } from "react";
import ChatbotIcon from "../Sources/MessageIcon.png";
import "../Style/ChatBot.css";

export default function Chatbot() {
  const [ChatBox, SetChatBox] = useState(false);

  function ShowChat() {
    if (ChatBox) {
      SetChatBox(false);
    } else {
      SetChatBox(true);
    }
  }

  if(ChatBox){
    document.getElementById('chat-container').style.display = "block"
  }else{
    document.getElementById('chat-container').style.display = "none"
  }

  return (
    <div className="Chatbot">
      <img
        src={ChatbotIcon}
        className="ChatbotIcon"
        onClick={() => ShowChat()}
        alt="ChatBotIcon"
      />
    </div>
  );
}
