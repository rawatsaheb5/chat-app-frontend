import React, { useState } from "react";
import "./rightSideBarFooter.css";
import { GrEmoji } from "react-icons/gr";
import { CiImageOn } from "react-icons/ci";
import { LuSendHorizonal } from "react-icons/lu";
import { useSocket } from "../../../context/Socket";
import { useSelectUserToChat } from "../../../context/SelectUser";
import EmojiPicker from "emoji-picker-react";
const RightSideBarFooter = () => {
  const [message, setMessage] = useState("");
  const [showPicker, setShowPicker] = useState(false); // State to show/hide emoji picker
  const onEmojiClick = (event, emojiObject) => {
    setMessage((prevInput) => prevInput + emojiObject.emoji); // Append selected emoji to input
    setShowPicker(false); // Hide emoji picker after selection
  };
  const { socket, setAllMessage } = useSocket();
  const { selectedUserToChat, setSelectedUserToChat } = useSelectUserToChat();
  const yourCredential = JSON.parse(localStorage.getItem("user"));
  const handleSendMessage = () => {
    console.log(message);
    if (message.trim() !== "") {
      setAllMessage((prevAllMessages) => [
        ...prevAllMessages,
        { content: message, sender: yourCredential._id },
      ]);
      socket.emit("send-message", {
        message,
        from: yourCredential._id,
        to: selectedUserToChat._id,
      });
      setMessage("");
    }
  };
  return (
    <div className="right-side-bar-footer">
      {showPicker && (
        <div style={{ position: "absolute", zIndex: 1 }}>
          <EmojiPicker onEmojiClick={onEmojiClick} />
        </div>
      )}
      <div className="right-side-bar-footer-left-icon-group">
        <GrEmoji
          onClick={() => setShowPicker((val) => !val)}
          style={{ fontSize: "24px", color: "#FFFFFF" }}
        />
        <CiImageOn style={{ fontSize: "24px", color: "#FFFFFF" }} />
      </div>

      <div className="right-side-bar-footer-middle-div">
        <input
          className="right-side-bar-footer-middle-div-input"
          type="text"
          placeholder="Type here"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <div className="right-side-bar-footer-right-icon-group">
        <LuSendHorizonal
          onClick={handleSendMessage}
          style={{ fontSize: "24px", color: "#FFFFFF" }}
        />
      </div>
    </div>
  );
};

export default RightSideBarFooter;
