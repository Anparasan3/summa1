import React, { useState } from "react";
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

  return (
    <div className="Chatbot">
      <img
        src={ChatbotIcon}
        className="ChatbotIcon"
        onClick={() => ShowChat()}
        alt="ChatBotIcon"
      />
      <div className={ChatBox ? "ChatVisible" : "ChatInvisible"}>
        Hey Hi! How can I help you?
      </div>
    </div>
  );
}
