import { useEffect, useState } from 'react';
import Pusher from "pusher-js";
import './App.css';
import Chat from './components/Chat';
import Sidebar from './components/Sidebar';
import axios from "./axios";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("/messages/sync").then(response => {
      setMessages(response.data);
    });
  }, []);

  useEffect(() => {
    const pusher = new Pusher('b2f7d82f450231a7e017', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function (newMessage) {
      // alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages]);

  console.log(messages);

  return (
    <div className="app">
      <div className='app_body'>
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
