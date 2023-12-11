import React from "react";
import "../css/SidebarChat.css";

const SidebarChat = () => {
  return (
    <div className="sidebarChat">
      <div>
        <img src="./images/1.jpg" className="avatar" alt="display pix" />
      </div>
      <div className="sidebarChat_info">
        <h2>Room name</h2>
        <p>This is the last message</p>
      </div>
    </div>
  );
};

export default SidebarChat;
