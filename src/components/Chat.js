import React, { useState } from "react";
import "../css/Chat.css";
import { MdInsertEmoticon, MdMic, MdMoreVert, MdSearch } from "react-icons/md";
import { BsPaperclip } from "react-icons/bs";
import axios from "../axios";

const Chat = ({ messages }) => {

  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    await axios.post('/messages/new', {
      message: input,
      name: "Mike Johnson",
      timestamp: new Date(),
      received: false
    });
    setInput("");
  }

  return (
    <div className="chat">
      <div className="chat_header">
        <div>
          <img src="./images/2.jpg" className="avatar" alt="display pix" />
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

        {messages.map(message => {
          return <p className={`chat_message ${message.received && "chat_receiver"}`}>
            <span className="chat_name">{message.name}</span>
            <span>{message.message}</span>
            <span className="chat_timestamp">{message.timestamp}</span>
          </p>
        })}

      </div>

      <div className="chat_footer">
        <MdInsertEmoticon className="footerIcons" />
        <form>
          <input value={input} onChange={e => setInput(e.target.value)} placeholder="Type a message"
            type="text" />
          <button onClick={sendMessage} type="submit">
            Send a message
          </button>
        </form>
        <MdMic className="footerIcons" />
      </div>


    </div>
  );
};

export default Chat;
