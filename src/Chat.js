import React, { useState } from "react";
import socket from "./Socket";

const Chat = () => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    socket.emit("message-from-client", message);
    setMessage("");
  };
  return (
    <div>
      <input
        type="text"
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleSend}>send </button>
    </div>
  );
};

export default Chat;
