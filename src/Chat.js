import React, { useState } from "react";
import { useSocket } from "./Socket";
import "./chat.css";

const Chat = () => {
  const [message, setMessage] = useState("");
  const { allMessage, setAllMessage, socket } = useSocket();
  const handleSend = (e) => {
    //setAllMessage((previousMessage)=> [...previousMessage,{ message, id: socket.id}])
    e.preventDefault();
    if (message.trim() !== "") {
      socket.emit("message-from-client", { message, id: socket.id });
      setMessage("");
    }
  };
  return (
    <div className="message-input-container">
      <input
        className="message-input"
        type="text"
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button className="send-button" onClick={handleSend}>
        <i className="send-icon">➤</i>
      </button>
    </div>
  );
};

export default Chat;
