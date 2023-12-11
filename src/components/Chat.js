import React from "react";
import "../css/Chat.css";
import { MdMoreVert, MdSearch } from "react-icons/md";
import { BsPaperclip } from "react-icons/bs";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chat_header">
        <div>
          <img src="./images/1.jpg" className="avatar" alt="display pix" />
        </div>
        <div className="chat_headerInfo">
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>

        <div className="chat_headerRight">
          <span className="icon">
            <MdSearch />
          </span>
          <span className="icon">
            <BsPaperclip />
          </span>
          <span className="icon">
            <MdMoreVert />
          </span>
        </div>
      </div>

      <div className="chat_body">
        <p className="chat_message">
          <span className="chat_name">Daniel</span>
          <span>This is a message</span>
          <span className="chat_timestamp">{new Date().toUTCString()}</span>
        </p>
      </div>
    </div>
  );
};

export default Chat;
