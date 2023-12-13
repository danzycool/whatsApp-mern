import React from "react";
import "../css/Chat.css";
import { MdInsertEmoticon, MdMic, MdMoreVert, MdSearch } from "react-icons/md";
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
          <span>This is a message from Dan</span>
          <span className="chat_timestamp">{new Date().toUTCString()}</span>
        </p>


        <p className="chat_message chat_receiver">
          <span className="chat_name">Michael</span>
          <span>This is a message from Mike; the chat receiver</span>
          <span className="chat_timestamp">{new Date().toUTCString()}</span>
        </p>



        <p className="chat_message">
          <span className="chat_name">James</span>
          <span>This is a message from James</span>
          <span className="chat_timestamp">{new Date().toUTCString()}</span>
        </p>
      </div>

      <div className="chat_footer">
        <MdInsertEmoticon className="footerIcons" />
        <form>
          <input placeholder="Type a message"
            type="text" />
          <button type="submit">
            Send a message
          </button>
        </form>
        <MdMic className="footerIcons" />
      </div>


    </div>
  );
};

export default Chat;
