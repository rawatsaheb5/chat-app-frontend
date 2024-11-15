import React from "react";
import "./card.css";
import { useSelectUserToChat } from "../../../context/SelectUser";
import axios from "axios";
import { useSocket } from "../../../context/Socket";
const Card = ({ name, _id }) => {
  const {
    selectedUserToChat,
    setSelectedUserToChat,
    
  } = useSelectUserToChat();
  const { allMessage, setAllMessage } = useSocket();
  const token = localStorage.getItem("authToken");
  const handleGetAllChatMessagesOfTheUser = async () => {
    try {
     
      const response = await axios.get(
        `http://localhost:8000/api/message/get-all-message/${_id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Setting the token in the header
          },
        }
      );

      setAllMessage(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUserReadyToChat = (name, _id) => {
    setSelectedUserToChat((previousSelectedUserToChat) => ({
      ...previousSelectedUserToChat,
      name,
      _id,
    }));
    handleGetAllChatMessagesOfTheUser();
  };

  return (
    <div
      onClick={() => handleUserReadyToChat(name, _id)}
      className="message-card">
      <div className="message-card-left-div">
        <img
          className="message-card-left-div-img"
          src="https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg"
        />
      </div>
      <div className="message-card-right-div">
        <span className="message-card-right-div-outer-span">
          <span className="message-card-right-div-inner-span-1">{name}</span>
          {/* <span className='message-card-right-div-inner-span-2'>yesterday</span> */}
        </span>
      </div>
    </div>
  );
};

export default Card;
