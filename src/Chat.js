import React, { useState } from "react";
import { useSocket } from "./context/Socket";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
  const [message, setMessage] = useState("");
  const { allMessage, setAllMessage, socket } = useSocket();
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [to, setTo] = useState(''); // to whom you want to send message
  const handleSend = (e) => {
    //setAllMessage((previousMessage)=> [...previousMessage,{ message, id: socket.id}])
    e.preventDefault();
    if (message.trim() !== "") {
      const data = {
        message,
        to
      }
      socket.emit("send-message", data);
      setMessage("");
    }
  };

  const handlePickEmoji = (emojiObject) => {
    console.log(emojiObject)
    setMessage((previousMessage) => previousMessage + emojiObject.emoji);
    setShowEmojiPicker(false);
  };
  return (
    <div className="message-input-container">
      
      <div className="emoji-picker-container">
        {showEmojiPicker && <EmojiPicker onEmojiClick={handlePickEmoji} />}
        <button onClick={() => setShowEmojiPicker(!showEmojiPicker)}>😊</button>
      </div>

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
